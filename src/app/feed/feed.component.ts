import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tweet } from '../shared/models/tweet';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent{
  @Input() tweets: Observable<Tweet[]>;
  @Output () like : EventEmitter<Tweet> = new EventEmitter<Tweet>();
  @Output () dislike : EventEmitter<Tweet> = new EventEmitter<Tweet>();
}
