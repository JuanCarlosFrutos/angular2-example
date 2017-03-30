import { Component, OnInit } from '@angular/core';

import { User } from '../models/user'

import { Store, provideStore } from '@ngrx/store';
import { AppStore } from '../store/app-store';

import {Observable} from 'rxjs/Rx';

import { Router } from '@angular/router';
import { LoginService } from '../login-service.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  private logedUserStore: Observable<User> ;
  private user = new User('', '');
  private isLogged : boolean;
  private err : boolean = false;

  constructor(
  	private _store: Store<AppStore>,
  	private _router: Router,
  	private loginService: LoginService
  	){
    this.logedUserStore = this._store.select('UserLoged');

    this.logedUserStore
      .subscribe(
        (user : User) => {
          user != undefined ? this.isLogged = true : this.isLogged = false;
          //this.isLogged = user;
        }
      );
  }

     /**
     * login.
     *
     * Ckeck if the user is registered. If it is registered, it can logged. 
     *
     */
  login() {

    let isLogged ;
    isLogged = this.loginService.login(this.user);

    if(isLogged){
      this._router.navigate(['/login/tweet']);
    }else{
      this.err = true;
    }
  }

  ngOnInit() {
  }

}
