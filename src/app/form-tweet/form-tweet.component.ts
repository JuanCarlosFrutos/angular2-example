import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-tweet',
  templateUrl: './form-tweet.component.html',
  styleUrls: ['./form-tweet.component.css']
})
export class FormTweetComponent implements OnInit {

  constructor(
  	private route: Router
  	) { }

  ngOnInit() {
  }

  redirect(){
  	this.route.navigate(['/']);
  }

}
