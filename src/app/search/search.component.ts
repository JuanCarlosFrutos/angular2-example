import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
//MODELS
import { User } from '../shared/models/user'
//SERVICE
import { FormsService } from '../shared/services/forms-service.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(
  	private formsService : FormsService
  ) {}

  public onChangeSearch (myInput) : void {

    if (myInput.value.indexOf('#')==0){

      this.formsService.searchTweet(myInput.value);

    }else{

      this.formsService.searchUser(myInput.value);
      console.log(myInput.value);

    }
    
  }
}
