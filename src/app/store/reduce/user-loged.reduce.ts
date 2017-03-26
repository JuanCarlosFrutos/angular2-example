
export const UserLoged = (state: any = undefined, action) => {

	switch(action.type){
	    case 'USER_LOGIN':
	    	return action.payload;
	    case 'USER_LOGOUT':
	    	return undefined;
	    default:
	    	return state;
 	}
}

