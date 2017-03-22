import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Store, provideStore } from '@ngrx/store';

import { Tweet } from '../models/tweet';
import { AppStore } from '../store/app-store';
import { LoginService } from '../login-service.service';

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

  private userLoged;
  private user;

  constructor(
    	private route: Router,
      private _store : Store<AppStore>,
      private loginService : LoginService
  	) {  
      this.userLoged = _store.select('UserLoged');
      this.userLoged.subscribe(result => {this.user = result; console.log(result)});
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

    //this.userLoged = this.loginService.isLoged();
    //this.userLoged.map(p => console.log(p));
    this._store.dispatch({type: 'TWEET_ADD', payload: new Tweet (new Date(), this.user.name, content.value, arr)});
  }

  ngOnInit() {
  }
}

