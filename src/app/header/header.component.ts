import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <div id="header" class="container">
     <div class="jumbotron">
      <h1>tterTwi</h1>
      <button (click)="redirect('tweet')" class="btn btn-info">Tweet</button>
    </div>
  </div>  `  
})
export class HeaderComponent implements OnInit {

  constructor(
  	private route: Router
  	) {}

  redirect(name){
  	console.log("Button : " + name);
  	this.route.navigate(['/tweet']);
  }

  ngOnInit() {
  }

}
