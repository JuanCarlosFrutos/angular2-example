import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {Observable} from 'rxjs/Rx';;
import { Store, provideStore } from '@ngrx/store';

import { Tweet } from '../models/tweet';
import { FeedComponent } from '../feed/feed.component';
import { TweetReduce } from '../store/reducer/tweet.reducer';
import { AppStore } from '../store/app-store';

@Component({
  selector: 'app-form-tweet',
  templateUrl: './form-tweet.component.html',
  styleUrls: ['./form-tweet.component.css'],
})
export class FormTweetComponent implements OnInit {

  //tweet : Observable<Tweet>;
  private tweet;

  constructor(
    	private route: Router,
      private _store : Store<AppStore>
  	) {  
       this.tweet = _store.select('TweetReduce');
    }


  ngOnInit() {
   // this._store.dispatch({type: 'TWEET_WRITE', payload: new Tweet (2, "Admin", "Primer tweet")});
  }

  // BorrarTweet(){
  //   this._store.dispatch({type: 'REMOVE_NUMBER'});
  // }

  writeTweet(content){
    this._store.dispatch({type: 'TWEET_ADD', payload: new Tweet (2, "Admin", content.value)});
  }

   // RegisterTweet(content){
   //    this._store.dispatch({type: 'DAME_NUMERO', payload: content.value});
   //    //console.log(this.numero);
   // }
}

