import { Injectable } from '@angular/core';

import { AppStore } from '../store/app-store';
import { User } from '../models/user';

import { Store } from '@ngrx/store';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class LoginService {

  private listUsersStore  : Observable<User[]>;
  private users           : User[];
  private userLoggedStore : Observable<User>;
  private user            : User;

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

    //subscribe to Store with all users.
    this.userLoggedStore
      .subscribe(
        (userLogged : User) => {
          this.user = userLogged;
        } 
    );

  }
  
   /**
     * newUser.
     *
     * Given a user, newUser check if information is correct.
     *
     */

  newUser(user : User) : boolean {

    //if (this.pass === this.repass){
      //this.user = new User (this.name, this.pass);
      this.store.dispatch({type: 'USER_REGISTER', payload: user});
      return true;
      //this.success = true;
      //this.err = false;
    //}else{
      //this.err = true;
      //this.success = false;
    //}
  }

  public login(loginUser: User) : boolean{

     //if (this.users.some((user : User)=> user.name === loginUser.name && user.pass === loginUser.pass )){
        //console.log(loginUser);
        this.store.dispatch({type: 'USER_LOGIN', payload: loginUser});
        return true;
     //}
     //return false;
  }

  public logout(){
      this.store.dispatch({type: 'USER_LOGOUT'});
  }

  public userLogged() : Observable<User>{
    return this.userLoggedStore;
  }

  public isLoggedIn(){
    if (this.user === undefined){
       return false;
    }
    return true; 
  }
}


