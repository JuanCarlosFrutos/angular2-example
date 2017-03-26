import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Hashtag } from './models/hashtag';
import { Tweet } from './models/tweet';
import { AppStore } from './store/app-store';
import { LoginService } from './login-service.service';

//TODO
//hashtag store
//types

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private tweetStore : Observable<Array<Tweet>>;
  private tweetsShow : Tweet[];
  private tweets : Tweet[];

  private hashtagStore : Observable<Array<Hashtag>>;
  private hashtagShow : Hashtag[];

  //private listUsers;
  //private userLoged;
  //private isLoged;

  constructor(
    private _store : Store<AppStore>,
    //private loginService : LoginService
  ) {

    //SELECT STORES
    this.tweetStore = _store.select('TweetReduce');
    this.hashtagStore = _store.select('HashtagsReduce');

    this.tweetStore
      .subscribe( 
        (arrayTweets: Tweet[]) => {
            this.tweets = arrayTweets; 
            this.tweetsShow = arrayTweets;
        }
      );

    this.hashtagStore
      .subscribe( 
        (arrayHashtags : Hashtag[]) => {
            this.hashtagShow = arrayHashtags;
        }
      );
  }

  ngOnInit () {
      //this.filterTweets('#all');
  }

  changeFilter (event){
      this.filterTweets(event.target.text)
  }

  filterTweets (filter){
    let tweetsIDS : number[] = [];
    
    this.hashtagShow.forEach(
      (hashtag : Hashtag) => {
        if (hashtag.name === filter) 
          tweetsIDS = hashtag.tweets;
      }
    );

    this.tweetsShow = this.tweets.filter((tweet : Tweet) => tweetsIDS.indexOf(tweet.id)>=0);
    
  }

 // logout($event){
 //   this.loginService.logout();
 // }
}
