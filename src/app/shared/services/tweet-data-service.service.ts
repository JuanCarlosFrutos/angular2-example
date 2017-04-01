import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//STORE
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store';
//MODELS
import { Tweet } from '../models/tweet';

@Injectable()
export class TweetDataServiceService {

	private tweetsStore : Observable<Tweet[]>;
  private tweets : Tweet[]; 
	private idTweet : number;

  constructor(
  		private _store : Store<AppStore>
  	) 
  { 
  	this.tweetsStore = _store.select('TweetReduce');

    this.tweetsStore
      .subscribe(
        (arrayTweets : Tweet[] ) => {
          this.tweets = arrayTweets;
        }
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

  public AllTweets() : Observable<Tweet[]> {
 	  return this.tweetsStore;
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
  public writeTweet(text : string, author: string) : void {

    let newTweet : Tweet;

    newTweet = new Tweet (this.idTweet,new Date(), author, text)
    this._store.dispatch({type: 'TWEET_ADD', payload: newTweet});
    this.idTweet++;
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
  public filterTweets (filter : string) : Tweet[] {

    let tweetsIDS : number[] = [];
    
    if (filter === "All Tweets"){
      this.tweets = this.tweets;
      return;
    }

  }

}
