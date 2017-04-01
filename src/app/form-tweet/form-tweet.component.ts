import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { User } from '../shared/models/user'
import { Tweet } from '../shared/models/tweet';
import { Hashtag } from '../shared/models/hashtag';
import { AppStore } from '../shared/store/app-store';
//SERVICES
import { TweetDataService } from '../shared/services/tweet-data-service.service';
import { FormsService } from '../shared/services/forms-service.service';

@Component({
  selector: 'app-form-tweet',
  templateUrl: './form-tweet.component.html',
})
export class FormTweetComponent {

  private success : boolean = false; 
  private date : Date;

  constructor(
      private tweetDataService : TweetDataService,
      private formsService : FormsService
  	) {  

    }

  private writeTweet(text : string) : void{
    this.formsService.submitTweet(text);
  }

}

