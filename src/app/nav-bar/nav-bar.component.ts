import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Hashtag } from '../shared/models/hashtag';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent{
	@Input() hashtags: Observable<Hashtag[]>;
	@Input() isLogged;
	// filter 
	@Output() changeFilter = new EventEmitter();
	@Output() logout = new EventEmitter();
}
