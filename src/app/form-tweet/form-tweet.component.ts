import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Store, provideStore } from '@ngrx/store';

import { Tweet } from '../models/tweet';
import { AppStore } from '../store/app-store';
import { LoginService } from '../login-service.service';

@Component({
  selector: 'app-form-tweet',
  templateUrl: './form-tweet.component.html',
})
export class FormTweetComponent implements OnInit {

  //private userLoged;
  //private user;
  private tweet = new Tweet (new Date(),'','',null);

  constructor(
    	private route: Router,
      private _store : Store<AppStore>,
      //private loginService : LoginService
  	) {  
      //this.userLoged = _store.select('UserLoged');
      //this.userLoged.subscribe(result => {this.user = result;});
    }

  writeTweet(content, author){

    let textTweet = content.value;
    let wordsTweet = textTweet.split(' ');


    let arr=[];
    for(var i = 0; i < wordsTweet.length; i++){
      console.log(wordsTweet[i]);
        if(wordsTweet[i].indexOf('#') == 0){
          arr.push(wordsTweet[i]);  
        }
    }

    this._store.dispatch({type: 'TWEET_ADD', payload: new Tweet (new Date(), author.value, content.value, arr)});
  }

  ngOnInit() {
  }
}

