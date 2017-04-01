import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Tweet } from '../../shared/models/tweet';

@Component({
  selector: 'app-tweet',
  templateUrl:  './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetComponent{
	@Input() tweet;
}
