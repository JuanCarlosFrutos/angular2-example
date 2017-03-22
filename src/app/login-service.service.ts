import { Injectable } from '@angular/core';

import { AppStore } from './store/app-store';
import { User } from './models/user';

import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService {

  private loggedIn = false;
  private endpoint: string;
  private listUsers;
  private users;
  private userLoged;

  constructor( private store: Store<AppStore>) {
    this.listUsers = store.select('UserReduce');
    this.listUsers.subscribe(result => {this.users = result; console.log(result);} );
  };
  
  public login(user: User){
    console.log(user);
    for (var i = 0; i<this.users.length; i++){
      console.log(this.users[i]);
      if (user.name===this.users[i].name && user.pass===this.users[i].pass){
        this.store.dispatch({type: 'USER_LOGIN', payload: user});
        console.log('loged');
      }
    }
  }

  public logout(){
      this.store.dispatch({type: 'USER_LOGOUT'});
  }
}


