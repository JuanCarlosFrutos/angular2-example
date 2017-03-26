import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Store, provideStore } from '@ngrx/store';

import { Tweet } from '../models/tweet';
import { Hashtag } from '../models/hashtag';
import { AppStore } from '../store/app-store';
import { LoginService } from '../login-service.service';

@Component({
  selector: 'app-form-tweet',
  templateUrl: './form-tweet.component.html',
})
export class FormTweetComponent implements OnInit {

  //private userLoged;
  //private user;
  //private tweet = new Tweet (new Date(),'','',null);
  private id : number = 0;

  constructor(
    	private route: Router,
      private _store : Store<AppStore>,
      //private loginService : LoginService
  	) {  
      //this.userLoged = _store.select('UserLoged');
      //this.userLoged.subscribe(result => {this.user = result;});
    }

  writeTweet(content, author){

    let newHashtag: Hashtag;
    let arrayid : number[] = [];
    let textTweet = content.value;
    let wordsTweet = textTweet.split(' ');

    arrayid.push(this.id);
    let arr=[];
    for(var i = 0; i < wordsTweet.length; i++){
        if(wordsTweet[i].indexOf('#') == 0){
          newHashtag = new Hashtag (wordsTweet[i], arrayid);
          this._store.dispatch({type: 'HASHTAG_ADD', payload: newHashtag});
        }
    }
    console.log('id =>' + this.id);
    this._store.dispatch({type: 'TWEET_ADD', payload: new Tweet (this.id,new Date(), author.value, content.value)});
    this.id++;
  }

  ngOnInit() {
  }
}

