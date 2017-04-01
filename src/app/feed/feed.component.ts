import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Tweet } from '../shared/models/tweet';

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-feed',
  template: `
  <div class="class-md-6">
    <div *ngFor="let item of tweets;">
        <app-tweet [tweet] = "item"></app-tweet>
    </div>
  </div>
  `
})
export class FeedComponent{
  @Input() tweets: Observable<Tweet[]>;
  private currentFilter;
}
