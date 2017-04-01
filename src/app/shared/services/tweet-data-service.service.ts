import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
//STORE
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store';
//MODELS
import { Tweet } from '../models/tweet';
import { Hashtag } from '../models/hashtag';



import { HashtagDataService } from './hashtag-data-service.service';


@Injectable()
export class TweetDataService {

	private tweetsStore : Observable<Tweet[]>;
  private tweetsSource = new Subject<Tweet[]>(); 
  tweets = this.tweetsSource.asObservable();
  tweetsArray : Tweet[];
	private idTweet : number = 0;

  constructor(
  		private _store : Store<AppStore>,
      private hashtagDataService : HashtagDataService,
  	) 
  { 


  	this.tweetsStore = _store.select('TweetReduce');


    this.tweetsStore
      .subscribe(
        (arrayTweets : Tweet[] ) => {
          this.tweetsSource.next(arrayTweets);
          this.tweetsArray = arrayTweets;
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
  public writeTweet(text : string, author: string) : void {

    let newTweet : Tweet;

    newTweet = new Tweet (this.idTweet,new Date(), author, text)
    this.hashtagDataService.SearchHashtag(text,this.idTweet);
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
  public filterTweets (hashtag : Hashtag) : void{

    let tweetsFilter : Tweet [];
 
    if (hashtag.name === "All Tweets"){
      this.tweets = this.tweets;
    }

    tweetsFilter = this.tweetsArray
                          .filter((tweet : Tweet) => hashtag.tweets.indexOf(tweet.id)>=0);

    this.tweetsSource.next(tweetsFilter);
  }


}
