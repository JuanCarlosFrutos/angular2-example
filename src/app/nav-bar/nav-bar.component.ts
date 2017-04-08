import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { Hashtag } from '../shared/models/hashtag';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{
	@Input() hashtags: Observable<Hashtag[]>;
	@Input() isLogged;
	// filter 
	//@Output() changeFilterTweets = new EventEmitter();
	@Output() logout = new EventEmitter();

	constructor (
		private router : Router
		) {

	}

	onClickMenu () {
		if (this.router.url === '/menu'){
			this.router.navigate(['']);
		}else{
			this.router.navigate(['/menu']);
		}
	}

}
