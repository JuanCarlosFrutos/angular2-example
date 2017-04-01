import { Component } from '@angular/core';
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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private tweets : Observable<Tweet[]>;
  private hashtags : Observable<Hashtag[]>;
  private loggedUser : Observable<User>;

  private isLogged : User;

  constructor(
    private loginService : LoginService,
    private tweetDataService : TweetDataService,
    private hashtagDataService : HashtagDataService,
    private formsService : FormsService,
    private _router: Router,
  ) {


    this.tweets = tweetDataService.allTweets();
    this.hashtags = hashtagDataService.allHashtag();
    this.loggedUser = loginService.userLogged();

    this.formsService.formTweet
                      .subscribe(
                        (text : string)=> {
                          this.newTweet(text);
                        }
                      );

    this.formsService.formLogin
                      .subscribe(
                        (user : User)=> {
                          this.login(user);
                        }
                      );

    this.formsService.formSignup
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

  /**
    * newTweet.
    *
    * Save in store the tweet and its hashtags.
    * 
    * This.tweetDataService.writeTweet return the id of new tweet. If return value is < 0 -> error
    * 
    *
    * @param tweet text
    *
    * @example newTweet("Hi, my name is JuanCarlos #Hello");

               Store before call newTweet.   Store after call newTweet.
               HASTAG STORE => []            HASTAG STORE => [(#hello,array[1])]
               TWEET STORE =>  []            TWEET STORE =>  [(id, date, author, "Hi, my name is JuanCarlos #Hello")]
               

    */

  private newTweet(text : string) : void{

    let idTweet : number ; 

    idTweet = this.tweetDataService.writeTweet(text, this.isLogged.name);

    this.formsService.StateTweet(idTweet>=0);

    this.hashtagDataService.SearchHashtag(text,idTweet);

  }

  /**
    * login.
    *
    * Try login user. Send the resulto to form-login (Using forsService)
    * 
    * @param user
    *
    * @example user1 = new User ("Juan Carlos" , "password");
    *          login(user1);
    */

  private login(user : User) : void {

    let state : boolean

    state = this.loginService.login(user);

    this.formsService.StateLogin(state);

    this._router.navigate(['/tweet']);
  }

  /**
    * newUser.
    *
    * Register new User.
    * 
    * @param new User
    *
    * @example newUser (new user ("Juan Carlos", "password"));
    */

  private newUser (user : User) : void {

    let state : boolean;

    state = this.loginService.newUser(user);

    this.formsService.StateSignup(state);
  }

  /**
    * changeFilter.
    *
    * Recives a new filter (hashtagName), calls getHashtag to obtain the hastag 
    * and finally tweetDataService.filterTweets() picks the correct tweets and 
    * change observable this.tweets.
    *
    * If filter is ALL_TWEETS , It will show all tweets.
    *
    * @param hashtag name
    *
    * @example changeFilter ("#Hello");
    *          
    *          
    */

  changeFilter (event) : void {

      let hastag : Hashtag;

      console.log("Filter: " + event.target.text);
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
