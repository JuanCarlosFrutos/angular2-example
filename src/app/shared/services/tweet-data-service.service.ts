import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
//STORE
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store';
import { TweetActions } from '../store/actions/tweet.action';
//MODELS
import { Tweet } from '../models/tweet';
import { Hashtag } from '../models/hashtag';


@Injectable()
export class TweetDataService {

	private tweetsStore : Observable<Tweet[]>;
  private tweetsSource = new Subject<Tweet[]>(); 
  tweets = this.tweetsSource.asObservable();
  tweetsArray : Tweet[];
	private idTweet : number = 0;

  constructor(
  		private _store : Store<AppStore>,
  	) 
  { 


  	this.tweetsStore = _store.select('TweetReduce');


    this.tweetsStore
      .subscribe(
        (arrayTweets : Tweet[] ) => {
          this.tweetsSource.next(arrayTweets);
          this.tweetsArray = arrayTweets;
          console.log("Modificador.")
        },
      )
  }


    /**
     * AllTweets.
     *
     * 
     * 
     *
     * @return Observable with all tweets in the store
     *
  	*/

  public allTweets() : Observable<Tweet[]> {
 	  return this.tweets;
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
  public writeTweet(text : string, author: string) : number {

    let newTweet : Tweet;

    newTweet = new Tweet (this.idTweet, new Date(), author, text, [], [])
    this._store.dispatch({type: TweetActions.TWEET_ADD, payload: newTweet});
    this.idTweet++;
    return this.idTweet - 1;
  }

  
  /**
    * filterTweets.
    *
    * Select all tweets that contains a hashtag and put all of it 
    * in tweetsShow.
    *
    * If the filter is all tweets ,then tweetsShow would have all tweets
    *
    * @param hashtag name
    *
    */
  public filterTweets (hashtag : Hashtag) : void{

    let tweetsFilter : Tweet [];
 
    if (hashtag.name === "ALL_TWEETS"){
      this.tweetsSource.next(this.tweetsArray);

    }else{
      tweetsFilter = this.tweetsArray
                          .filter((tweet : Tweet) => hashtag.tweets.indexOf(tweet.id)>=0);

      this.tweetsSource.next(tweetsFilter);
    }

  }

    /**
    * 
    *
    *
    *
    * @param hashtag name
    *
    */

  public like (tweet : Tweet, idUser : number) : void {
    let object : Object = {};
    object['tweet'] = tweet;
    object['idUser'] = idUser;
    this._store.dispatch({type: TweetActions.TWEET_LIKE, payload: object});
  }

    /**
    * 
    *
    *
    * @param 
    *
    */

  public dislike (tweet : Tweet, idUser : number) : void {
    let object : Object = {};
    object['tweet'] = tweet;
    object['idUser'] = idUser;
    this._store.dispatch({type: TweetActions.TWEET_DISLIKE, payload: object});
  }


}
