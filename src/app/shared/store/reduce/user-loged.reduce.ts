import { User } from '../../models/user';
import { Action } from '@ngrx/store';
import { UserActions } from '../actions/user.action';

export function UserLoged (state: User, action : Action) {

	switch(action.type){

	    case UserActions.USER_LOGIN:
	    	console.log(action.payload);
	    	return action.payload;

	    case UserActions.USER_LOGOUT:
	    	return undefined;
	    	
	    default:
	    	return state;
 	}
}

