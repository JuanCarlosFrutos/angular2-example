import { Component, OnInit } from '@angular/core';

import { User } from '../models/user'

import { Store, provideStore } from '@ngrx/store';
import { AppStore } from '../store/app-store';

import {Observable} from 'rxjs/Rx';

import { Router } from '@angular/router';
import { LoginService} from '../login-service.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  private listUsers: Observable<Array<User>>;
  private logedUser;
  private user = new User('Juan Carlos', '1234');

  submitted = false;

  constructor(
  	private _store: Store<AppStore>,
  	private _router: Router,
  	private loginService: LoginService
  	){
    this.logedUser = this._store.select('UserLoged');
  }

  login() {

    console.log(this.logedUser);
    //this._store.dispatch({type: 'USER_REGISTER', payload: this.user});
    //this._router.navigate(['/tweet']);
  }

  ngOnInit() {
  }

}
