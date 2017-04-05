import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//STORE
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store';
import { HashtagActions } from '../store/actions/hashtag.action';
//MODELS 
import { Hashtag } from '../models/hashtag';

@Injectable()
export class HashtagDataService {

	private hashtagStore : Observable<Hashtag[]>;
  private hashtagArray : Hashtag[] = [];
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
     * allHashtag
     *
     * With this function you obtain a Observable ,that will be modified 
     * in function of filters.
     * If filter is equal ALL_TWEETS the observable has all tweets, but 
     * if filter is equal #Hello, the observable has the tweets that 
     * contains hashtag #Hello.
     *
     * @param 
     *
     * @return Obervable Hashtag[]
     *
     */

  public allHashtag () : Observable<Hashtag[]> {
    return this.hashtagStore;
  }

   /**
     * getHashtag
     *
     * Search for a hashtag with the same name of param hashtagName
     *
     * @param hashtagName is the name of hashtag that you need to obtain.
     *
     * @return return the object Hashtag.
     *
     */

  public getHashtag ( hashtagName : string) : Hashtag {

    let searchedHashtag : Hashtag = new Hashtag ("ALL_TWEETS", null);

    if (hashtagName === "ALL_TWEETS") {
        return searchedHashtag;
    }

    this.hashtagArray
      .map(
        (hashtag : Hashtag) => {
          if(hashtag.name === hashtagName) 
            searchedHashtag = hashtag;
        }
      );

    return searchedHashtag;
  }

   /**
     * SearchHashtag
     *
     * This function search for all hashtag in a text and save it in hashtagStore.
     * Use two auxiliar function (splitHashtags, existHashtag).
     * 
     * @param textTweet
     *        idTweet : If the text contains a hashtag that exists in the store I need to
     *                  add the id tweet to this hashtag.
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
            this._store.dispatch({type: HashtagActions.HASHTAG_ADD, payload: newHashtag});
          }else{
            this._store.dispatch({type: HashtagActions.HASHTAG_UPDATE, payload: [index,idTweet]});
          }

        }
      );

  }

   /**
     * splitHashtags
     *
     * Select only the words that begins for "#" (hashtags).
     * 
     * 
     * @param array with words.
     *
     * @return array with hashtags.
     * 
     * @example input  : arrayWords    = [Hi, My, Name, is, Jcarlos, #goodMorning, #Hello]
     *          output : arrayHashtags = [#goodMorning, #Hello]
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
     * Check if this hashtag exist, if exist return her inder
     * 
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
