import { Injectable } from '@angular/core';
import { AppStore } from '../store/app-store';
import { User } from '../models/user';
import { Store } from '@ngrx/store';
import { Subject }    from 'rxjs/Subject';
import { UserActions } from '../store/actions/user.action';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService {

  private usersSource     : Subject<User[]> = new Subject<User[]>(); 
  private users           : Observable<User[]> = this.usersSource.asObservable();

  private listUsersStore  : Observable<User[]>;
  private usersArray      : User[];
  
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
          this.usersSource.next(arrayUsers);
          this.usersArray = arrayUsers;
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
     * allTweets.
     *
     *
     */

  public allUsers() : Observable<User[]> {
     return this.users;
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

      let user = new User ( this.userId, object['name'], object['pass'], []);
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
     *@param object => {username : string, password : string} 
     *
     *@return true if data is correct , and false in other way.
     *
     */

  public login(object : Object) : boolean{

    let users : User [];
    console.log(object["userName"]);
    console.log(object["password"]);
    users = this.usersArray
                        .filter(                                                                                  
                          (user : User) => {                                                                              
                            return object["userName"] && user.pass === object["password"];      
                           // console.log(user.name === object["userName"] && user.pass === object["password"]);                    
                          }                                                                                           
                        ); 

     if (users.length <= 0){
       return false;
     }    

     this.store.dispatch({type: UserActions.USER_LOGIN, payload: users[0]});
     return true;

  }

   /**
     * logout.
     *
     *
     */

  public logout(){
      this.store.dispatch({type: UserActions.USER_LOGOUT});
  }

   /**
     * userLogged.
     *
     *
     */

  public userLogged() : Observable<User>{
    return this.userLoggedStore;
  }

   /**
     * isLoggedIn.
     *
     *
     */

  public isLoggedIn(){
    if (this.user === undefined){
       return false;
    }
    return true; 
  }

   /**
     * searchUser.
     *
     *
     */

  public searchUser(name : string) : void {

    let usersFilter : User [];


      usersFilter = this.usersArray
                          .filter((user : User) => {
                                          return user.name.indexOf(name) == 0;
                                  }
                          );

      this.usersSource.next(usersFilter);
  }

   /**
     * addFriend.
     *
     *
     */

  public addFriend (user : User) : void {
    if (user != undefined) {
      user.friends.push(user);
    }
  } 

   /**
     * ShowFriends.
     *
     *
     */

  public ShowFriends (user : User) : void {
    let friends : User [];

      friends = this.usersArray
                          .filter((user : User) => this.user.friends.indexOf(user) >= 0 );

      this.usersSource.next(friends);
  } 

}


