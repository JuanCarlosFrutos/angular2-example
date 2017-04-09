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

  public tweets     : Observable<Tweet[]>;
  public users      : Observable<User[]>;
  public hashtags   : Observable<Hashtag[]>;
  public loggedUser : Observable<User>;

  public userLogged : User;

  public isLogged   : boolean = false;
  public showTweets : boolean = true; 
  public showUsers  : boolean = false;

  constructor(
    private loginService       : LoginService,
    private tweetDataService   : TweetDataService,
    private hashtagDataService : HashtagDataService,
    private formsService       : FormsService,
    private _router            : Router,
  ) {

    this.tweets     = tweetDataService.allTweets();
    this.hashtags   = hashtagDataService.allHashtag();
    this.loggedUser = loginService.userLogged();
    this.users      = loginService.allUsers();

    this.formsService.formTweet
                      .subscribe(
                        (text : string)=> {
                          this.newTweet(text);
                        }
                      );

    this.formsService.formLogin
                      .subscribe(
                        (object : Object)=> {
                          this.login(object);
                        }
                      );

    this.formsService.formSignup
                      .subscribe(
                        (object : Object)=> {
                          this.newUser(object);
                        }
                      );      

    this.formsService.nameUser
                      .subscribe(
                        (name : string)=> {
                          this.searchUser(name);
                        }
                      );  

    this.formsService.filterTweet
                      .subscribe(
                        (filter : string)=> {
                          this.changeFilterTweets(filter);
                        }
                      );                                                    

    this.loggedUser
                .subscribe( 
                  (user : User) => {
                    this.setUserLogged(user);
                    user != undefined ? this.isLogged=true : this.isLogged=false;
                  }
                );

  }

  /**
    * login.
    *
    * Try login user.
    * Return to form-login the result (true or false). 
    * It uses formsService.
    *
    * @param object => {string: userNanme, string: password}
    *
    * @example user1 = new User ("Juan Carlos" , "password");
    *          login(user1);
    */

  private login(object : Object) : void {

    let state : boolean

    state = this.loginService.login(object);

    this.formsService.StateLogin(state);

    this._router.navigate(['']);
  }

  /**
    * newUser.
    *
    * Register new User. Return true or false to form-signUp.
    * 
    * @param object {string: userName, string: password, string: repassword}
    *
    * @example newUser (new user ("Juan Carlos", "password"));
    *
    */

  private newUser (object : Object) : void {

    let state : boolean;

    state = this.loginService.newUser(object);

    this.formsService.StateSignup(state);
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
    * clickLike.
    *
    * It saves in store that this user click like in the tweet.(Use TweetDataService)
    * 
    * @param $event is the tweet chooses by the user. 
    *        $event => {number: id, Date: date, string: author, string: text,
    *                    number[]: likes, number[]: dislikes}
    *
    */

  public clickLike($event) : void{

    this.tweetDataService.like($event, this.userLogged.id);

  }

  /**
    * clickDislike.
    *
    * @param $event is the tweet chooses by the user.
    * 
    */
  
  public clickDislike($event) : void{

    this.tweetDataService.dislike($event, this.userLogged.id);

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

    idTweet = this.tweetDataService.writeTweet(text, this.userLogged.name);

    this.formsService.StateTweet(idTweet>=0);

    this.hashtagDataService.SearchHashtag(text,idTweet);

    this.showUsers = false;
    this.showTweets = true;

  }

  /**
    * changeFilterTweets.
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

  changeFilterTweets (hashtagName : string) : void {

      let hashtag : Hashtag;

      if (hashtagName === "ALL_TWEETS"){  //
        hashtag = new Hashtag("ALL_TWEETS", null);             //-->Change this
      }               

      hashtag = this.hashtagDataService.getHashtag(hashtagName);                          //   

      if (hashtag != null){
        this.tweetDataService.filterTweets(hashtag);
      }
      
      this.showUsers = false;
      this.showTweets = true;
      
  }

  /**
    * changeFilter.
    *
    *        
    *          
    */

  private setUserLogged (user : User) : void {

    this.userLogged = user;

    this.formsService.setUserLogged(user);

  }

  /**
    * searchUser.
    *
    *        
    *          
    */

  private searchUser(name) : void {
    this.loginService.searchUser(name);
    this.showUsers = true;
    this.showTweets = false;
  }

  /**
    * addUser.
    *
    *        
    *          
    */

  public addFriend(user : User) {
    this.loginService.addFriend(user);
  }


}
