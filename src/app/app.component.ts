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
    //SELECT STORES
    this.tweet = _store.select('TweetReduce');
    this.currentFilter = _store.select('FilterReduce');
    //this.listUsers = _store.select('UserReduce');
    //this.userLoged = _store.select('UserLoged');

    //FILTER TWEETS
    this.tweetFilter = Observable.combineLatest(this.currentFilter,this.tweet)
    .let(stateSelector());
    //CHECK IF USER IS LOGED
    //this.userLoged.subscribe(result => { result === undefined ? this.isLoged = false : this.isLoged = true;console.log(this.isLoged); });
    //ARRAY WITH DIFFERENTS HASHTAGS USE TO NAV-BAR. 
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

 // logout($event){
 //   this.loginService.logout();
 // }
}
