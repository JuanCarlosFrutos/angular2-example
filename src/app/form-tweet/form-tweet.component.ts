import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { User } from '../models/user'
import { Tweet } from '../models/tweet';
import { Hashtag } from '../models/hashtag';
import { AppStore } from '../store/app-store';

@Component({
  selector: 'app-form-tweet',
  templateUrl: './form-tweet.component.html',
})
export class FormTweetComponent {

  private userLogedStore : Observable <User>;
  private userLoged : User;

  private globalIdStore : Observable<number>;
  private id : number;


  constructor(
      private _store : Store<AppStore>,
  	) {  
      this.userLogedStore = _store.select('UserLoged');
      this.userLogedStore.subscribe((user : User) => this.userLoged = user);

      this.globalIdStore = _store.select('GlobalId');
      this.globalIdStore.subscribe ((num : number) => this.id = num);
    }

  /**
     * writeTweet.
     *
     * Given a route with one or more dynamic parameters, replace
     * parameters with supplied parameters and return resulting string.
     *
     * @param text text of tweet
     *
     * @return void
     *
  */

  writeTweet(text : string) : void {

    let newTweet : Tweet;
    let newHashtag: Hashtag;
    let arrayid : number[] = [this.id];
    let wordsTweet : string[]

    wordsTweet = text.split(' ');

    //Detected all hashtag in text.
    wordsTweet.forEach(
      (word : string) => {
        if(word.indexOf('#') == 0){
          newHashtag = new Hashtag (word, arrayid);
          this._store.dispatch({type: 'HASHTAG_ADD', payload: newHashtag});
        }
      }
    );

    //Created new tweet.
    newTweet = new Tweet (this.id,new Date(), this.userLoged.name, text)

    //Saved changes in store.
    this._store.dispatch({type: 'TWEET_ADD', payload: newTweet});
    this._store.dispatch({type: 'ID_INCREMENT'});
  }
}

