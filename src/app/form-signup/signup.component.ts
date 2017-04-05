import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

//MODEL
import { User } from '../shared/models/user'
//STORE
import { Store } from '@ngrx/store';
import { AppStore } from '../shared/store/app-store';
//SERVICE
import { FormsService } from '../shared/services/forms-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent {

  // Variables new User
  //private user: User;
  private name: string;
  private pass: string;
  private repass: string;
  private object: Object = {};

  private err: boolean = false;
  private success : boolean = false;

  constructor(
  	private formsService : FormsService
  	){
    this.formsService.MessageSignup
                        .subscribe(
                          (state : boolean)=>{
                            this.configureMessages(state);
                          }
                        );
  }
  
  private newUser () : void {

    this.object['name']   = this.name;
    this.object['pass']   = this.pass;
    this.object['repass'] = this.repass;
    this.formsService.submitSignup(this.object);
    
  }

  private configureMessages (state : boolean) : void {

    if (state === true) {
      this.err = false;
      this.success = true;
    } else {
      this.err = true;
      this.success = false;
    }
  }

}
