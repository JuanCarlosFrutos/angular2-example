import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
	<nav class="container navbar navbar-default">
	  <div class="container-fluid">

	    <ul class="nav navbar-nav">
	      <li *ngFor="let item of hashtags">
	      	<a (click)="filter.emit($event)">{{item.name}}</a>
	      </li>
	    </ul>
	    <ul class="nav navbar-nav navbar-right">
      	  <li><a [routerLink]="['/signup']" href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li *ngIf="isLogged===undefined"><a [routerLink]="['/login']" href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          <li *ngIf="isLogged!=undefined"><a [routerLink]="['/login']" (click) = "logout.emit()"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
   		</ul>
	  </div>
	</nav>
  `
})
export class NavBarComponent{
	@Input() hashtags: String[];
	@Input() isLogged;
	// filter 
	@Output() filter = new EventEmitter();
	@Output() logout = new EventEmitter();
}
