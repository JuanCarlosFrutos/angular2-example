import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { Tweet } from './models/tweet';
import { AppStore } from './store/app-store';
import { stateSelector} from './store/state-selector';
import { LoginService} from './login-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  private tweet;
  private tweetFilter : Observable<Array<Tweet>>;
  private currentFilter;
  private listUsers;
  private userLoged;
  private hashtags : Array<String> = ['#all'];
  private isLoged;

  constructor(
    private _store : Store<AppStore>,
    private loginService : LoginService
    ) {  
    // this._store.dispatch({type: 'TWEET_ADD', payload: new Tweet (2, "Admin", "Tweet APP PRINCIPAL", this.hashtags)});
    this.tweet = _store.select('TweetReduce');
    this.currentFilter = _store.select('FilterReduce');
    this.listUsers = this._store.select('UserReduce');
    this.userLoged = this._store.select('UserLoged');

    this.tweetFilter = Observable.combineLatest(this.currentFilter,this.tweet)
    .let(stateSelector());
    //If login tweet button active, if not disable.
    this.userLoged.subscribe(result => { result === undefined ? this.isLoged = false : this.isLoged = true;console.log(this.isLoged); });
    //array tags nav-bar 
    this.tweet.subscribe( result => {
      result.map(p => {
        for (var i = 0; i<p.hashtags.length; i++){
          if (!(this.hashtags.indexOf(p.hashtags[i])>=0))
            this.hashtags.push(p.hashtags[i]);
        }
      });
    });

  }

  changeFilter(event){
    //console.log($event);
    this._store.dispatch({type: 'TWEET_FILTER', payload: event.target.text});
  }

  logout($event){
    this.loginService.logout();
  }
}
