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
  private user: User;
  private name: string;
  private pass: string;
  private repass: string;

  private err: boolean = false;
  private success : boolean = false;

  constructor(
  	private formsService : FormsService
  	){}
  
  private newUser () : void {
    this.formsService.submitSignup(new User (this.name,this.pass));
  }
}
