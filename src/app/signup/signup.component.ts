import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

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

  private user: User;
  private name: string;
  private pass: string;
  private repass: string;
  private err: boolean = false;
  private success : boolean = false;

  constructor(
  	private _store: Store<AppStore>,
  	private _router: Router
  	){
  }

  newUser() {

    if (this.pass === this.repass){
      this.user = new User (this.name, this.pass);
      this._store.dispatch({type: 'USER_REGISTER', payload: this.user});
      this.success = true;
    }else{
      this.err = true;
    }
    //this.user = new User('', '');
    //this._router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
