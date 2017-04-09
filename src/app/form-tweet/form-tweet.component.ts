import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
//MODELS
import { User } from '../shared/models/user'
import { Tweet } from '../shared/models/tweet';
import { Hashtag } from '../shared/models/hashtag';
//SERVICES
import { FormsService } from '../shared/services/forms-service.service';

@Component({
  selector: 'app-form-tweet',
  templateUrl: './form-tweet.component.html',
  styleUrls: ['./form-tweet.component.css'],
})
export class FormTweetComponent {

    public success : boolean = false; 
    public date    : Date;

  constructor(
    private formsService : FormsService
  )
  {  
    this.formsService.MessageTweet
                        .subscribe(
                          (state : boolean)=>{
                            this.configureMessages(state);
                          }
                        );
  }

  public writeTweet(text : string) : void {

    this.formsService.submitTweet(text);

  }

  private configureMessages (state : boolean) : void {
   
      if (state === true) {
        this.date = new Date();
        this.success = true;
      }

  }

}

