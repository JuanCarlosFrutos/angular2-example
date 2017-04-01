import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//STORE
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store';
//MODELS
import { Hashtag } from '../models/hashtag';

@Injectable()
export class HashtagDataService {

	private hashtagStore : Observable<Hashtag[]>;
  private hashtagArray : Hashtag[];
	private idTweet : number;

  constructor(
  		private _store : Store<AppStore>
  	) 
  { 
  	this.hashtagStore = _store.select('HashtagsReduce');

    this.hashtagStore
      .subscribe(
        (arrayHashtag : Hashtag[]) => {
          this.hashtagArray = arrayHashtag;
        }
      );
  }



      /**
     * 
     *
     * 
     * 
     *
     * @param 
     *
     * @return 
     *
  */

  public allHashtag () : Observable<Hashtag[]> {
    return this.hashtagStore;
  }

  public getHashtag ( hastahName : string) : Hashtag {

    let searchedHashtag : Hashtag = null;

    this.hashtagArray
      .map(
        (hashtag : Hashtag) => {
          if(hashtag.name === hastahName) 
            searchedHashtag = hashtag;
        }
      );
    return searchedHashtag;
  }

      /**
     * 
     *
     * 
     * 
     *
     * @param text text of tweet
     *
     * @return void
     *
  */

  public SearchHashtag(textTweet : string, idTweet :number) : void {

    let newHashtag: Hashtag;
    let arrayid : number[] = [];
    let wordsTweet : string[];
    let index : number;

    wordsTweet = textTweet.split(' ');

    //Save in wordsTweet only hte hashtags
    wordsTweet = this.splitHashtags(wordsTweet);
    //Set in arrayid the next id. It will be new id tweet
    arrayid[0] = idTweet;

    wordsTweet
      .forEach(
        (hashtag : string) => {
          index = this.existHashtag(hashtag);

          if (index === -1){
            newHashtag = new Hashtag (hashtag, arrayid);
            this._store.dispatch({type: 'HASHTAG_ADD', payload: newHashtag});
          }else{
            this._store.dispatch({type: 'HASHTAG_UPDATE', payload: [index,idTweet]});
          }

        }
      );

  }

  /**
     * 
     *
     * 
     *
     * @return 
     *
     *@example 
     *          
  */
  private splitHashtags(arrayWords : string[]) : string[] {

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
  private existHashtag(hashtagName : string) : number {
    let index  = -1;

    this.hashtagArray
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
