import { Component } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Hashtag } from './models/hashtag';
import { Tweet } from './models/tweet';
import { User } from './models/user';
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
export class AppComponent{

  private tweetStore : Observable<Array<Tweet>>;
  private tweetsShow : Tweet[];
  private tweets : Tweet[];

  private hashtagStore : Observable<Array<Hashtag>>;
  private hashtagShow : Hashtag[];

  private loggedUserStore : Observable<User>;
  private isLogged : User;

  //private listUsers : ;
  //private userLoged;
  //private isLoged;

  constructor(
    private _store : Store<AppStore>,
    private loginService : LoginService
  ) {

    //SELECT STORES
    this.tweetStore = _store.select('TweetReduce');
    this.hashtagStore = _store.select('HashtagsReduce');
    this.loggedUserStore = _store.select('UserLoged');

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

    this.loggedUserStore
      .subscribe( 
        (userLogged : User) => {
            this.isLogged = userLogged;
        }
      );
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

  logout(){
    this.loginService.logout();
  }
}
