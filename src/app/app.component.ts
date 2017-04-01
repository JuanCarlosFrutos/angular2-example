import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

//MODELS
import { Hashtag } from './shared/models/hashtag';
import { Tweet } from './shared/models/tweet';
import { User } from './shared/models/user';
//SERVICE
import { LoginService } from './shared/services/login-service.service';
import { TweetDataService } from './shared/services/tweet-data-service.service';
import { HashtagDataService } from './shared/services/hashtag-data-service.service';
import { FormsService } from './shared/services/forms-service.service';

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
  private loggedUser : Observable<User>;

  private isLogged : User;

  constructor(
    private loginService : LoginService,
    private _router: Router,
    private tweetDataService : TweetDataService,
    private hashtagDataService : HashtagDataService,
    private forms : FormsService
  ) {


    this.tweets = tweetDataService.allTweets();
    this.hashtags = hashtagDataService.allHashtag();
    this.loggedUser = loginService.userLogged();

    //events handles by formsService
    this.forms.formTweet
                      .subscribe(
                        (text : string)=> {
                          this.newTweet(text);
                        }
                      );

    this.forms.formLogin
                      .subscribe(
                        (user : User)=> {
                          this.login(user);
                        }
                      );

    this.forms.formSignup
                      .subscribe(
                        (user : User)=> {
                          this.newUser(user);
                        }
                      );                                       

    this.loggedUser
      .subscribe( 
        (userLogged : User) => {
            this.isLogged = userLogged;
        }
      );
  }
  /***/
  private newTweet(text : string) : void{
    let idTweet : number ; 
    idTweet = this.tweetDataService.writeTweet(text, this.isLogged.name);
    this.hashtagDataService.SearchHashtag(text,idTweet);
  }

  private login(user : User) {
    console.log(user);
    this.loginService.login(user);
    this._router.navigate(['/tweet']);

  }

  private newUser (user : User) {
    this.loginService.newUser(user);
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
