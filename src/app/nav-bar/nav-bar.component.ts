import { Component, OnInit, Input } from '@angular/core';

import {Observable} from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { AppStore } from '../store/app-store'

@Component({
  selector: 'app-nav-bar',
  template: `
	<nav class="container navbar navbar-default">
	  <div class="container-fluid">

	    <ul class="nav navbar-nav">
	      <li *ngFor="let item of hashtags">
	      	<a (click)="filter()">{{item}}</a>
	      </li>
	    </ul>
	  </div>
	</nav>
  `
})
export class NavBarComponent implements OnInit{
	@Input() hashtags: String[];

	ngOnInit(){

	}

	 constructor(
      private _store : Store<AppStore>,
  	) {  
  	   //this._store.dispatch({type: 'TWEET_WRITE', payload: new Tweet (2, "Admin", "Primer tweet APP PRINCIPAL"), {'0','0'}});
       //this.tweet = _store.select('TweetReduce');
    }

	filter(){
		this._store.dispatch({type: 'TWEET_FILTER', payload: "#hola"});
	}
}
