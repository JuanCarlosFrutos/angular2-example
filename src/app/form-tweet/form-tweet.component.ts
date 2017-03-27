import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/user'
import { Tweet } from '../models/tweet';
import { Hashtag } from '../models/hashtag';
import { AppStore } from '../store/app-store';
import { LoginService } from '../login-service.service';

@Component({
  selector: 'app-form-tweet',
  templateUrl: './form-tweet.component.html',
})
export class FormTweetComponent implements OnInit {

  private userLogedStore : Observable <User>;
  private userLoged : User;

  private globalId : Observable<number>;
  private id : number;

  constructor(
    	private route: Router,
      private _store : Store<AppStore>,
  	) {  
      this.userLogedStore = _store.select('UserLoged');
      this.userLogedStore.subscribe((user : User) => this.userLoged = user);

      this.globalId = _store.select('GlobalId');
      this.globalId.subscribe ((num : number) => this.id = num);
    }

  writeTweet(content){

    let newHashtag: Hashtag;
    let arrayid : number[] = [];
    let textTweet = content.value;
    let wordsTweet = textTweet.split(' ');

    arrayid.push(this.id);

    wordsTweet.forEach(
      (word : string) => {
        if(word.indexOf('#') == 0){
          newHashtag = new Hashtag (word, arrayid);
          this._store.dispatch({type: 'HASHTAG_ADD', payload: newHashtag});
        }
      }
    );
    console.log(this.userLoged.name);
    this._store.dispatch({type: 'TWEET_ADD', payload: new Tweet (this.id,new Date(), this.userLoged.name, content.value)});
    this._store.dispatch({type: 'ID_INCREMENT'});
  }

  ngOnInit() {
  }
}

