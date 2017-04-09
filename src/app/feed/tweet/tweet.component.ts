import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Tweet } from '../../shared/models/tweet';

@Component({
  selector: 'app-tweet',
  templateUrl:  './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
})

export class TweetComponent{

	@Input() tweet 	  : Tweet;

	@Output() like 	  : EventEmitter<Tweet> = new EventEmitter<Tweet>();
	@Output() dislike : EventEmitter<Tweet> = new EventEmitter<Tweet>();

}
