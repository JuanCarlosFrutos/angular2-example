import { Component, OnInit, Input, Output } from '@angular/core';

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
	      	<a (click)="filter($event)">{{item}}</a>
	      </li>
	    </ul>
	  </div>
	</nav>
  `
})
export class NavBarComponent implements OnInit{
	@Input() hashtags: String[];
	//@Output() filter: filterHashtags = new EventEmitter();

	ngOnInit(){

	}

	 constructor(
      private _store : Store<AppStore>,
  	) {  
    }

	filter(event){
		this._store.dispatch({type: 'TWEET_FILTER', payload: event.target.text});
	}
}
