import { Component, OnInit  } from '@angular/core';

import {Observable} from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { Tweet } from './models/tweet';
import { AppStore } from './store/app-store'

import { TweetReduce } from './store/reducer/tweet.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  private tweet;

  constructor(
      private _store : Store<AppStore>
  	) {  
  	   //this._store.dispatch({type: 'TWEET_WRITE', payload: new Tweet (2, "Admin", "Primer tweet APP PRINCIPAL"), {'0','0'}});
       this.tweet = _store.select('TweetReduce');
    }
}
