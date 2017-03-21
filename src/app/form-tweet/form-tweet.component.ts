import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Store, provideStore } from '@ngrx/store';

import { Tweet } from '../models/tweet';
import { AppStore } from '../store/app-store';

@Component({
  selector: 'app-form-tweet',
  template: `
  <div class="container">
    <h2>Tweet</h2>
    <form>
      <div class="form-group">
          <label>Content:</label>
          <input #content type="text" name="content">
      </div>

      <button class="btn btn-default"type="submit" (click)="writeTweet(content)">EscribirTweet</button>
    </form>
  </div>
  `
})
export class FormTweetComponent implements OnInit {

  constructor(
    	private route: Router,
      private _store : Store<AppStore>
  	) {  
    }

  writeTweet(content){
    let textTweet = content.value;
    let wordsTweet = textTweet.split(' ');
    let arr=[];
    for(var i = 1; i < wordsTweet.length; i++){
        if(wordsTweet[i].indexOf('#') == 0){
          arr.push(wordsTweet[i]);  
        }
    }
    this._store.dispatch({type: 'TWEET_ADD', payload: new Tweet (2, "Admin", content.value, arr)});
  }

  ngOnInit() {
  }
}

