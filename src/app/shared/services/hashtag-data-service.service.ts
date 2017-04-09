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
  	this.hashtagStore = _store.select(s => s.hashtags);

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

    let searchedHashtag : Hashtag = null;

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
     * 
     *
     * 
     *
     * @param 
     *
     * @return 
     *
     */

  public newHashtag ( hashtagName : string, idTweet: number) : void {

      let hashtag : Hashtag;
      let object : Object = {};
      let arrayid : number[]  = [];

      hashtag  = this.getHashtag(hashtagName);

      if (hashtag === null){
        arrayid.push(idTweet);
        hashtag = new Hashtag (hashtagName, arrayid);
        this._store.dispatch({type: HashtagActions.HASHTAG_ADD, payload: hashtag});
      }else{
        object['hashtag'] = hashtag;
        object['idTweet'] = idTweet;
        this._store.dispatch({type: HashtagActions.HASHTAG_UPDATE, payload: object});
      }
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

    let wordsTweet : string[];

    wordsTweet = textTweet.split(' ');

    //Save in wordsTweet only hte hashtags
    wordsTweet = this.splitHashtags(wordsTweet);

    wordsTweet
      .forEach(
        (hashtagName : string) => {
          this.newHashtag(hashtagName,idTweet);
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
}
