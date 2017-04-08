import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject }    from 'rxjs/Subject';
//STORE
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store';
//MODELS
import { Tweet } from '../models/tweet';
import { Hashtag } from '../models/hashtag';
import { User } from '../models/user';

@Injectable()
export class FormsService {

  // ***************** Submit ***********************//
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
  private MessageTweetSource = new Subject<boolean>();
  private MessageLoginSource = new Subject<boolean>();
  private MessageSignupSource = new Subject<boolean>();

  public MessageTweet : Observable<boolean>   = this.MessageTweetSource.asObservable();
  public MessageLogin : Observable<boolean>   = this.MessageLoginSource.asObservable();
  public MessageSignup: Observable<boolean>   = this.MessageSignupSource.asObservable();
  // ************************************************//


  constructor() { }

  public submitTweet ( text : string ) : any {
  	this.formTweetSource.next(text);
  };

  // SUBMIT LOGIN EVENT
  public submitLogin ( object : Object ) : any {
  	this.formLoginSource.next(object);
  };

  public submitSignup ( object : Object ) : any {
  	this.formSignupSource.next(object);
  };

  public setUserLogged ( user : User ) : any {
    this.userLoggedSource.next(user);
  };

  public searchUser ( name : string ) : any {
    this.nameUserSource.next(name);
  };

  public searchTweet ( name : string ) : any {
    this.filterTweetSource.next(name);
  };

  public StateTweet ( state : boolean ) : any {
    this.MessageTweetSource.next(state);
  };

  public StateLogin ( state : boolean ) : any {
    this.MessageLoginSource.next(state);
  };

  public StateSignup ( state : boolean ) : any {
    this.MessageSignupSource.next(state);
  };
}
