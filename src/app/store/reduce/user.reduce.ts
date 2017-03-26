
export const UserReduce = (state: any = [], action) => {

	switch(action.type){
	    case 'USER_REGISTER':
	    	return [...state, action.payload];
	    default:
	    	return state;
 	}
}
