import { User } from '../../models/user';
import { Action } from '@ngrx/store';

export function UserLoged (state: User, action : Action) {

	switch(action.type){
	    case 'USER_LOGIN':
	    	console.log(action.payload);
	    	return action.payload;
	    case 'USER_LOGOUT':
	    	return undefined;
	    default:
	    	return state;
 	}
}

