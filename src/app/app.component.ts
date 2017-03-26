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
            //this.addHashtags(arrayTweets);
        }
      );



    // this.tweetStore.subscribe( result => {
    //   result.map(p => {
    //     for (var i = 0; i<p.hashtags.length; i++){
    //       if (!(this.hashtags.indexOf(p.hashtags[i])>=0))
    //         this.hashtags.push(p.hashtags[i]);
    //     }
    //   });
    // });

  }

  // addHashtags(arrayTweets : Tweet []){
  //   let listHashtags : string[];

  //   if (arrayTweets.length != 0){

  //     listHashtags = arrayTweets[arrayTweets.length-1].hashtags;
  //     for (var i = 0; i<listHashtags.length; i++){
  //       this._store.dispatch({type: 'HASHTAG_ADD', payload:listHashtags[i]});
  //     }
  //   }
  // }


  ngOnInit () {
      this.filterTweets('#all');
  }

  changeFilter (event){
      this.filterTweets(event.target.text)
  }

  filterTweets (filter){
    // if (filter === '#all'){
    //   this.tweetsShow = this.tweets;
    // }else{
    //   this.tweetsShow = this.tweets.filter(upgrade => upgrade.hashtags.indexOf(filter)>= 0);
    // }
  }

 // logout($event){
 //   this.loginService.logout();
 // }
}
