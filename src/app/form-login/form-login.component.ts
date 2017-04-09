import { Component, OnInit } from '@angular/core';

import { User } from '../shared/models/user'

import {Observable} from 'rxjs/Rx';

//SERVICE
import { FormsService } from '../shared/services/forms-service.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  public userName : string;
  public password  : string;
  public userData : Object = {}; // {userName : string, password : string}
  public err : boolean = false;

  constructor(
    private formsService : FormsService
    ){
        this.formsService.MessageLogin
                              .subscribe(
                                (state : boolean)=>{
                                  this.configureMessages(state);
                                }
                              );
  }
  
  public login () : void {

    this.formsService.submitLogin(this.userData);

  }

  private configureMessages (state : boolean) : void {
    if (state === false) {
      this.err = true;
    }    
  }

}
