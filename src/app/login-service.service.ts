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
  private userLoged;

  constructor( private store: Store<AppStore>) {
  		//this.listUsers = store.select('UserReduce');
  		//this.userLoged = store.select('UserLoged');
  };


  public login(user: User){
      this.store.dispatch({type: 'USER_LOGIN', payload: user});
  }

  public logout(){
      this.store.dispatch({type: 'USER_LOGOUT'});
  }

  public isLoged(){
    console.log(this.store.dispatch({type: 'USER_LOGED'}));
      return this.store.dispatch({type: 'USER_LOGED'});
  }
  // private extractData(response: any): any {
  //   return response;
  // }

  // /**
  //  * Method logout.
  //  *
  //  * Remove user from localstorage and customer
  //  *
  //  * @return should return json today is going to another page
  //  *
  //  * @example login();
  //  */
  // public logout() {

  //   let self = this;

  //   // set logout url
  //   this.endpoint = API.domain + 'logout';

  //   return this.http.get(this.endpoint, { withCredentials: true })
  //     .map((response: any) => {

  //       // erase user object
  //       localStorage.setItem('user', undefined);

  //       // remove user from customer 
  //       self.store.dispatch({type: CustomerAction.REMOVE_CUSTOMER});

  //       /** 
  //       * @todo should return json, now is redirect to another page
  //       */
  //       return response;
  //     });
  // }

  // /**
  //  * Method authorized.
  //  *
  //  * API Check if user is logged
  //  *
  //  * @return return customer object
  //  *
  //  * @todo need to check if is not logged and remove from localstorage
  //  */
  // public authorized() {

  //   // set authorized url
  //   this.endpoint = API.domain + 'ibe/authorized.json';

  //   return this.http.get(this.endpoint, { withCredentials: true })
  //     .map((response: any) => {
  //       return response;               
  //     });
  // }

  // *
  //  * Method authorized.
  //  *
  //  * Client side Check if user is logged
  //  *
  //  * @return return boolean true or false
  //  *
   
  // public isLogged() {

  //   if (localStorage.getItem('user') === undefined) {
  //     this.store.dispatch({type: CustomerAction.REMOVE_CUSTOMER});
  //     return false;
  //   }

  //   let user = localStorage.getItem('user')
  //   let currentUser;

  //   if (user !== undefined) {
  //     currentUser = JSON.parse(user)

  //     this.store.dispatch({type: CustomerAction.ADD_CUSTOMER, payload: currentUser});

  //     if (currentUser !== null && currentUser.customer_number !== undefined) {
  //       return true;
  //     }
  //   }

  //   return false;
  // }

  // /**
  //  * Method setUser.
  //  *
  //  * Add user to localstorage and customer
  //  *
  //  * @param user, is customer object
  //  *
  //  */
  // public setUser(user) {
  //   if (user !== undefined) {
  //     this.store.dispatch({type: CustomerAction.ADD_CUSTOMER, payload: user});
  //     localStorage.setItem('user', JSON.stringify(user));
  //   }
  // }

  // /**
  //  * Method getLoggedUser.
  //  *
  //  * return user object
  //  *
  //  * @return return user object from localstorage
  //  *
  //  */
  // public getLoggedUser() {

  //   let user = localStorage.getItem('user');
  //   if (user !== undefined) {
  //     return JSON.parse(user);
  //   }

  //   return {};
  // }

}


