import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
	<nav class="container navbar navbar-default">
	  <div class="container-fluid">

	    <ul class="nav navbar-nav">
	      <li *ngFor="let item of hashtags">
	      	<a (click)="filter.emit($event)">{{item}}</a>
	      </li>
	    </ul>
	  </div>
	</nav>
  `
})
export class NavBarComponent{
	@Input() hashtags: String[];
	@Output() filter = new EventEmitter();
}
