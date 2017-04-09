import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
//MODELS
import { Hashtag } from '../shared/models/hashtag';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{

	@Input() hashtags: Observable<Hashtag[]>;
	@Input() isLogged: boolean;

	@Output() logout : EventEmitter<void> = new EventEmitter<void>();

	constructor (
		private router : Router
	) {}

	public onClickMenu () {

		if (this.router.url === '/menu'){
			this.router.navigate(['']);
		}else{
			this.router.navigate(['/menu']);
		}

	}

}
