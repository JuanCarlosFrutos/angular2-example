import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//MODELS
import { Tweet } from '../shared/models/tweet';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent{
  @Input() tweets : Observable<Tweet[]>;
  @Input() users : Observable<User[]>;
  @Input() showTweets : boolean;
  @Input() showUsers  : boolean;
  @Output () like : EventEmitter<Tweet> = new EventEmitter<Tweet>();
  @Output () dislike : EventEmitter<Tweet> = new EventEmitter<Tweet>();
  @Output () addFriend : EventEmitter<User> = new EventEmitter<User>();
}
