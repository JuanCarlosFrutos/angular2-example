import { User } from '../../models/user';
import { Action } from '@ngrx/store';

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
export function UserReduce (state : User[] = [] , action : Action) {

	switch(action.type){
	    case 'USER_REGISTER':
	    	return [...state, action.payload];
	    default:
	    	return state;
 	}
}

