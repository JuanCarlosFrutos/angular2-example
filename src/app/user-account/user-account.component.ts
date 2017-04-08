import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';
//MODELS
import { User } from '../shared/models/user'
//SERVICE
import { FormsService } from '../shared/services/forms-service.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {

  private user : User; 	
  private nameUserSearch: string;

  constructor(
  	private formsService : FormsService
  	) {
  }

  private onChangeSearch (input) : void {
    this.formsService.searchFriend(input.value);
    console.log(input.value);
  }
}
