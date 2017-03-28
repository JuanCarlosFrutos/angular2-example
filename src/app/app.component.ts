import { Component } from '@angular/core';
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

export class AppComponent{

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
    * @param hashtag name
    *
    */
  filterTweets (filter) : void {
    let tweetsIDS : number[] = [];
    
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
}
