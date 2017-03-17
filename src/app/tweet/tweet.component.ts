import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Tweet } from '../models/tweet';

@Component({
  selector: 'app-tweet',
  template: `
  <div class = "container">
    <li style ="background : green;" *ngFor="let item of tweet">
    	<p>Date: {{item.id}}</p>
    	<p>Author: {{item.author}}</p>
    	<p>Content: {{item.text}}</p>
      <p>Hashtags: {{item.hashtags}}</p>
          
    </li>
  </div>
  `, 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetComponent{
	@Input() tweet: Tweet;
}
