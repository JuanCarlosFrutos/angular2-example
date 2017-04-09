import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
//STORE
import { Store }      from '@ngrx/store';
import { AppStore }   from '../store/app-store';
//MODELS
import { Tweet }      from '../models/tweet';
import { Hashtag }    from '../models/hashtag';
import { User }       from '../models/user';

@Injectable()
export class FormsService {

    // ***************** EVENTS ***********************//
    private formTweetSource   = new Subject<string>();
    private formLoginSource   = new Subject<Object>();
    private formSignupSource  = new Subject<Object>();
    private userLoggedSource  = new Subject<User>();
    private nameUserSource    = new Subject<string>();
    private filterTweetSource = new Subject<string>();

    public formTweet   : Observable<string>  = this.formTweetSource.asObservable();
    public formLogin   : Observable<Object>  = this.formLoginSource.asObservable();
    public formSignup  : Observable<Object>  = this.formSignupSource.asObservable();
    public userLogged  : Observable<User>    = this.userLoggedSource.asObservable();
    public nameUser    : Observable<string>  = this.nameUserSource.asObservable();
    public filterTweet : Observable<string>  = this.filterTweetSource.asObservable();
    // ************************************************//

    // ***************State of forms*******************//
    private MessageTweetSource  = new Subject<boolean>();
    private MessageLoginSource  = new Subject<boolean>();
    private MessageSignupSource = new Subject<boolean>();

    public MessageTweet : Observable<boolean>   = this.MessageTweetSource.asObservable();
    public MessageLogin : Observable<boolean>   = this.MessageLoginSource.asObservable();
    public MessageSignup: Observable<boolean>   = this.MessageSignupSource.asObservable();
    // ************************************************//

  // SEND TWEET EVENT
  public submitTweet ( text : string ) : void {

  	this.formTweetSource.next(text);

  };

  // SUBMIT LOGIN EVENT
  public submitLogin ( object : Object ) : void {

  	this.formLoginSource.next(object);

  };

  // SUBMIT SIGNUP EVENT
  public submitSignup ( object : Object ) : void {

  	this.formSignupSource.next(object);

  };

  // USER LOGGED EVENT
  public setUserLogged ( user : User ) : void {

    this.userLoggedSource.next(user);

  };

  // SEARCH USER EVENT
  public searchUser ( name : string ) : void {

    this.nameUserSource.next(name);

  };

  // SEARCH TWEET EVENT
  public searchTweet ( name : string ) : void {

    this.filterTweetSource.next(name);

  };

  // ERROR/SUCCES SEND TWEET
  public StateTweet ( state : boolean ) : void {

    this.MessageTweetSource.next(state);

  };

  // ERROR/SUCCES SUBMIT LOGIN
  public StateLogin ( state : boolean ) : void {

    this.MessageLoginSource.next(state);

  };

  // ERROR/SUCCES SUBMIT SIGN UP
  public StateSignup ( state : boolean ) : void {

    this.MessageSignupSource.next(state);

  };

}
