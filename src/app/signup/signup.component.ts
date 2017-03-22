import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs/Rx';

//MODEL
import { User } from '../models/user'
//STORE
import { Store } from '@ngrx/store';
import { AppStore } from '../store/app-store';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  private user = new User('', '');

  constructor(
  	private _store: Store<AppStore>,
  	private _router: Router
  	){
  }

  newUser() {
    this._store.dispatch({type: 'USER_REGISTER', payload: this.user});
    //this.user = new User('', '');
    this._router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
