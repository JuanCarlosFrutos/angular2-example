export const GlobalId = (state: number = 0, action) => {

	switch(action.type){
	    case 'ID_INCREMENT':
	    	return state + 1;
	    default:
	    	return state;
 	}
}
