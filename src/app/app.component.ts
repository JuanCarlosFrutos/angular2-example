import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//STORE
import { Store } from '@ngrx/store';
import { AppStore } from './store/app-store';
//MODELS
import { Hashtag } from './models/hashtag';
import { Tweet } from './models/tweet';
import { User } from './models/user';
//SERVICE
import { LoginService } from './login-service.service';

//to do
//display form tweet
//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  private tweetStore : Observable<Array<Tweet>>;
  private tweetsShow : Tweet[];
  private tweets : Tweet[];

  private hashtagStore : Observable<Array<Hashtag>>;
  private hashtagShow : Hashtag[];

  private loggedUserStore : Observable<User>;
  private isLogged : User;

  constructor(
    private _store : Store<AppStore>,
    private loginService : LoginService
  ) {

    //Select stores.
    this.tweetStore = _store.select('TweetReduce');
    this.hashtagStore = _store.select('HashtagsReduce');
    this.loggedUserStore = _store.select('UserLoged');

    //subscribes.
    this.tweetStore
      .subscribe( 
        (arrayTweets: Tweet[]) => {
            this.tweets = arrayTweets; 
            this.tweetsShow = arrayTweets;
        }
      );

    this.hashtagStore
      .subscribe( 
        (arrayHashtags : Hashtag[]) => {
            this.hashtagShow = arrayHashtags;
        }
      );

    this.loggedUserStore
      .subscribe( 
        (userLogged : User) => {
            this.isLogged = userLogged;
        }
      );
  }

  /**
    * ngOnInit.
    *
    * 
    * 
    *
    * @param click event nav-bar. It contains the hashtag name for filter.
    *
    *
    */
  ngOnInit () {
  }
  /**
    * changeFilter.
    *
    * Given a route with one or more dynamic parameters, replace
    * parameters with supplied parameters and return resulting string.
    *
    * @param click event nav-bar. It contains the hashtag name for filter.
    *
    *
    */

  changeFilter (event) : void {
      this.filterTweets(event.target.text)
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
  filterTweets (filter) : void {
    let tweetsIDS : number[] = [];
    
    if (filter === "All Tweets"){
      this.tweetsShow = this.tweets;
      return;
    }

    this.hashtagShow
      .forEach(
        (hashtag : Hashtag) => {
          if (hashtag.name === filter) 
            tweetsIDS = hashtag.tweets;
        }
      );

    this.tweetsShow = this.tweets
                            .filter((tweet : Tweet) => tweetsIDS.indexOf(tweet.id)>=0);
  }

  /**
    * logout.
    *
    * Use LoginService to delete from the store the current User.
    * 
    */

  logout() : void{
    this.loginService.logout();
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
  handle(){
    console.log("Event receive.");
  }

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
