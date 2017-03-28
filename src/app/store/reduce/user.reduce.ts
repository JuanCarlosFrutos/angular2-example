import { User } from '../../models/user';
import { Action } from '@ngrx/store';

export const UserReduce = (state : User[] = [], action : Action) => {

	switch(action.type){
	    case 'USER_REGISTER':
	    	return [...state, action.payload];
	    default:
	    	return state;
 	}
}
