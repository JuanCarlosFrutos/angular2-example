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

  private success : boolean = false; 
  private date : Date;

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
    let arrayid : number[] = [];
    let wordsTweet : string[];

    wordsTweet = text.split(' ');

    //Save in wordsTweet only hte hashtags
    wordsTweet = this.searchHashtags(wordsTweet);
    //Set in arrayid the next id. It will be new id tweet
    arrayid.push(this.id);

    wordsTweet
      .forEach(
        (hashtag : string) => {
          newHashtag = new Hashtag (hashtag, arrayid);
          console.log(newHashtag);
          this._store.dispatch({type: 'HASHTAG_ADD', payload: newHashtag});
        }
      );



    //Created new tweet.
    newTweet = new Tweet (this.id,new Date(), this.userLoged.name, text)
    this.success = true;
    this.date = new Date();

    //Saved changes in store.
    this._store.dispatch({type: 'TWEET_ADD', payload: newTweet});
    //Increment id
    this._store.dispatch({type: 'ID_INCREMENT'});
  }

  /**
     * searchHashtags.
     *
     * @param Array with all words in the text of tweet
     *
     * @return Array with hashtags find in text
     *
     *@example input  : [Hi, Im, JuanCarlos, #Hello]
     *         output : [#Hello] 
  */
  searchHashtags(arrayWords : string[]) : string[] {

    let arrayHashtahs : string[] = [];

    arrayWords.forEach(
      (word : string) => {
        if(word.indexOf('#') == 0)
          arrayHashtahs.push(word);       
      }
    );
    return arrayHashtahs;
  }


}

