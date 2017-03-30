import { Injectable } from '@angular/core';

import { AppStore } from './store/app-store';
import { User } from './models/user';

import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService {

  private listUsersStore  : Observable<User[]>;
  private users           : User[];
  private userLoggedStore  : Observable<User>;
  private userLogged       : User;

  constructor( private store: Store<AppStore>) 
  {

    //selects
    this.listUsersStore = store.select('UserReduce');
    this.userLoggedStore = store.select('UserLoged');

    //subscribe to Store with all users.
    this.listUsersStore
      .subscribe(
        (arrayUsers : User[]) => {
          this.users = arrayUsers;
        } 
    );

    //subscribe to Store that contains info about logged user.
    this.userLoggedStore
      .subscribe(
        (user : User) => {
          this.userLogged = user;
        } 
    );
  }
  
  public login(loginUser: User) : boolean{

    if (this.users.some((user : User)=> user.name === loginUser.name && user.pass === loginUser.pass )){
        this.store.dispatch({type: 'USER_LOGIN', payload: loginUser});
        return true;
    }
    return false;
  }

  public logout(){
      this.store.dispatch({type: 'USER_LOGOUT'});
  }

  public isLoggedIn(){
    if (this.userLogged === undefined){
      return false;
    }
    return true; 
  }
}


