import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//STORE
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store';
//MODELS
import { Hashtag } from '../models/hashtag';

@Injectable()
export class HashtagDataServiceService {

	private hashtagStore : Observable<Hashtag[]>;
	private idTweet : number;

  constructor(
  		private _store : Store<AppStore>
  	) 
  { 
  	this.hashtagStore = _store.select('TweetReduce');
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
  /************************/

  writeTweet(text : string) : void {

    let newTweet : Tweet;
    let newHashtag: Hashtag;
    let arrayid : number[] = [];
    let wordsTweet : string[];
    let index : number;

    wordsTweet = text.split(' ');

    //Save in wordsTweet only hte hashtags
    wordsTweet = this.splitHashtags(wordsTweet);
    //Set in arrayid the next id. It will be new id tweet
    arrayid.push(this.id);

    wordsTweet
      .forEach(
        (hashtag : string) => {
          index = this.existHashtag(hashtag);

          if (index === -1){
            newHashtag = new Hashtag (hashtag, arrayid);
            this._store.dispatch({type: 'HASHTAG_ADD', payload: newHashtag});
          }else{
            this._store.dispatch({type: 'HASHTAG_UPDATE', payload: [index,this.id]});
          }

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
     *@example input  : [Hi, Im, JuanCarlos, #Hello #hi]
     *         output : [#Hello, #hi] 
  */
  splitHashtags(arrayWords : string[]) : string[] {

    let arrayHashtahs : string[] = [];

    arrayWords.forEach(
      (word : string) => {
        if(word.indexOf('#') == 0)
          arrayHashtahs.push(word);       
      }
    );
    return arrayHashtahs;
  }

  /**
     * existHashtag.
     *
     * @param 
     *
     * @return 
     *
     *@example 
     *          
  */
  existHashtag(hashtagName : string) : number {
    let index  = -1;

    this.hashtags
      .map( 
        (hashtag : Hashtag, ind : number) => {
          if (hashtag.name === hashtagName){
            index = ind;
          }
        }
      );

    return index;
  }


}
