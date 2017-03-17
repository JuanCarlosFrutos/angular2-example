import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Tweet } from '../models/tweet';

@Component({
  selector: 'app-feed',
  template: `
  <div class="container" style = "background: red">
    <div>
        <app-tweet [tweet] = "tweets"></app-tweet>
    </div>
  </div>
  `
})
export class FeedComponent{
  //@Input() number: Number;
  @Input() tweets: Tweet;
}
