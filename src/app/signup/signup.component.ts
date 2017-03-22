import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'

import { Store, provideStore } from '@ngrx/store';
import { AppStore } from '../store/app-store';

import {Observable} from 'rxjs/Rx';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private listUsers: Observable<Array<User>>;
  private user = new User('', '');

  submitted = false;

  constructor(
  	private _store: Store<AppStore>,
  	private _router: Router
  	){
	this.listUsers = this._store.select('UserReduce');
  }

  newUser() {
    this.user = new User('', '');
    this._store.dispatch({type: 'USER_REGISTER', payload: this.user});
    //this._router.navigate(['/tweet']);
  }

  ngOnInit() {
  }

}
