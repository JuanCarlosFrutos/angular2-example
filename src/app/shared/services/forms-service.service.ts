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

  private formTweetSource = new Subject<string>();
  private formLoginSource = new Subject<User>();
  private formSignupSource = new Subject<User>();

  public formTweet : Observable<string> = this.formTweetSource.asObservable();
  public formLogin : Observable<User>   = this.formLoginSource.asObservable();
  public formSignup: Observable<User>   = this.formSignupSource.asObservable();


  constructor() { }

  public submitTweet ( text : string ) : any {
  	this.formTweetSource.next(text);
  };

  public submitLogin ( user : User ) : any {
  	this.formLoginSource.next(user);
  };

  public submitSignup ( user : User ) : any {
  	this.formSignupSource.next(user);
  };

}
