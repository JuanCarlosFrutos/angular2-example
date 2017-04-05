import { Component, OnInit } from '@angular/core';

import { User } from '../shared/models/user'

import {Observable} from 'rxjs/Rx';

import { LoginService } from '../shared/services/login-service.service';

//SERVICE
import { FormsService } from '../shared/services/forms-service.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  private logedUserStore: Observable<User> ;
  private user = new User(-99,'', '');//-->Change this
  private isLogged : boolean;
  private err : boolean = false;

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
  
  private login () : void {

    this.formsService.submitLogin(this.user);

  }

    private configureMessages (state : boolean) : void {

    if (state === false) {
      this.err = true;
    }    
  }

}
