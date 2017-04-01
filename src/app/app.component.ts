import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//STORE
import { Store } from '@ngrx/store';
import { AppStore } from './shared/store/app-store';
//MODELS
import { Hashtag } from './shared/models/hashtag';
import { Tweet } from './shared/models/tweet';
import { User } from './shared/models/user';
//SERVICE
import { LoginService } from './shared/services/login-service.service';
import { TweetDataService } from './shared/services/tweet-data-service.service';
import { HashtagDataService } from './shared/services/hashtag-data-service.service';

//to do
//display form tweet
//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  private tweets : Observable<Tweet[]>;
  private hashtags : Observable<Hashtag[]>;

  private hashtagShow : Hashtag[];

  private loggedUserStore : Observable<User>;
  private isLogged : User;

  constructor(
    private _store : Store<AppStore>,
    private loginService : LoginService,
    private tweetDataService : TweetDataService,
    private hashtagDataService : HashtagDataService
  ) {

    this.tweets = tweetDataService.allTweets();
    this.hashtags = hashtagDataService.allHashtag();

    //Select stores.
    this.loggedUserStore = _store.select('UserLoged');



    this.loggedUserStore
      .subscribe( 
        (userLogged : User) => {
            this.isLogged = userLogged;
        }
      );
      console.log(this.tweets);
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
      let hastag : Hashtag;

      hastag = this.hashtagDataService.getHashtag(event.target.text);
      this.tweetDataService.filterTweets(hastag);
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
