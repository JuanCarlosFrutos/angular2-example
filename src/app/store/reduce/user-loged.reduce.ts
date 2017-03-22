
export const UserLoged = (state: any = [], action) => {

	switch(action.type){
	    case 'USER_LOGIN':
	    	return action.payload;
	    case 'USER_LOGOUT':
	    	return undefined;
	    default:
	      return undefined;
 	}
}

