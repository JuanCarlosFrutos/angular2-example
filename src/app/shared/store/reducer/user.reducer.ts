import { User } from '../../models/user';
import { Action } from '@ngrx/store';
import { UserActions } from '../actions/user.action';

  /**
    * UserReduce.
    *
    * Add new user to user store 
    *
    * @param action.payload must be type User
	*
    * @return User[] that contains all user registered.
    *                    
    */
export function UserReducer (state : User[] = [] , action : Action) {

    state = [               new User (-1,'juanC','1234',[]),
                            new User (-2,'pedro','1234',[]),
                            new User (-3,'JuanCarlos','1234',[]),
                            new User (-4,'peter','1234',[]),
                            new User (-5,'juan','1234',[]),
                            new User (-6,'jorge','1234',[]),
                            new User (-7,'Alicia','1234',[]),
                            new User (-8,'Ana','1234',[]),
                            new User (-9,'Andres','1234',[]),
new User (-10,'patricia','1234',[])];

	switch(action.type){
	    case UserActions.USER_REGISTER:

	    	return [...state, action.payload];

	    default:
        
	    	return state;
 	}
}

