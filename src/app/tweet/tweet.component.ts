import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Tweet } from '../models/tweet';

@Component({
  selector: 'app-tweet',
  template: `
  <div class = "container">
    <li style ="background : green;">
    	<p>Date: {{tweet.id}}</p>
    	<p>Author: {{tweet.author}}</p>
    	<p>Content: {{tweet.text}}</p>
      <p>Hashtags: {{tweet.hashtags}}</p>      
    </li>
  </div>
  `, 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TweetComponent{
	@Input() tweet;
}
