import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { Tweet } from './models/tweet';
import { AppStore } from './store/app-store';
import { stateSelector} from './store/state-selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  private tweet;
  private tweetFilter : Observable<Array<Tweet>>;
  private currentFilter;
  private hashtags : Array<String> = ['#all'];

  constructor(
      private _store : Store<AppStore>,
  	) {  
      // this._store.dispatch({type: 'TWEET_ADD', payload: new Tweet (2, "Admin", "Tweet APP PRINCIPAL", this.hashtags)});
       this.tweet = _store.select('TweetReduce');
       this.currentFilter = _store.select('FilterReduce');
      // const latest = this.currentFilter.withLatestFrom(this.tweet);

      // const subscribe = latest.subscribe(latestValues => {

      //   const [filter, tweets] = latestValues;

      //   if (filter != undefined){
      //     this.tweetFilter = tweets.filter(upgrade => upgrade.hashtags.includes(filter));
      //   }else{
      //     this.tweetFilter = this.tweet;
      //   }
      //   console.log(this.tweetFilter);
      // });

     this.tweetFilter = Observable.combineLatest(this.currentFilter,this.tweet)
      //extracting party model to selector
      .let(stateSelector());

      //console.log(this.tweetFilter);

      this.tweet.subscribe( result => {
                                      result.map(p => {
                                                        for (var i = 0; i<p.hashtags.length; i++){
                                                            if (!(this.hashtags.indexOf(p.hashtags[i])>=0))
                                                              this.hashtags.push(p.hashtags[i]);
                                                        }
                                                      });
                                    });


       //this.currentFilter.subscribe(result => {console.log("HIii");this.tweetFilter = this.tweet.map(p => console.log(p.hashtags))});
         // p.filter(upgrade => upgrade.hashtags.includes('')))
    }
}
