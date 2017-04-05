import { Injectable } from '@angular/core';
import { AppStore } from '../store/app-store';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { UserActions } from '../store/actions/user.action';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {

  private listUsersStore  : Observable<User[]>;
  private users           : User[];
  private userLoggedStore : Observable<User>;
  private user            : User;
  private userId          : number = 0;

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
     * Given the date of the user, newUser checks if information is correct.
     *
     *@param object , it contains all data of new user. Example : object [name:Jcarlos, pass:1234, repass:1234 ]
     *
     *
     *@return if all data is correct return true, if it isnt correct return false.
     *
     */

  newUser(object : Object) : boolean {

    if (object['pass'] === object['repass']){

      let user = new User ( this.userId, object['name'], object['pass'] );
      this.store.dispatch({type: UserActions.USER_REGISTER, payload: user});
      this.userId++;
      return true;

    }

    return false;

  }

   /**
     * login.
     *
     * Check if the user is registered in the store.
     *
     *@param User 
     *
     *@return true if data is correct , and false in other way.
     *
     */

  public login(loginUser: User) : boolean{

     if (this.users.some((user : User)=> user.name === loginUser.name && user.pass === loginUser.pass )){
        //console.log(loginUser);
        this.store.dispatch({type: UserActions.USER_LOGIN, payload: loginUser});
        return true;
     }
     return false;
  }

  public logout(){
      this.store.dispatch({type: UserActions.USER_LOGOUT});
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


