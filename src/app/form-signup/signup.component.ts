import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
//MODEL
import { User } from '../shared/models/user'
//SERVICE
import { FormsService } from '../shared/services/forms-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})

export class SignupComponent {

    public name    : string;
    public pass    : string;
    public repass  : string;

    public object  : Object  = {};// {name : string, pass : string, repass : string}
    public err     : boolean = false;

    public success : boolean = false;

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
  
  public newUser () : void {

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
