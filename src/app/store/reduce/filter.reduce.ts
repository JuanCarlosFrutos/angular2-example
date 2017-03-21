export const FilterReduce = (state: string, action) => {
// This reducer saves current filter.
	switch(action.type){
	    case 'TWEET_FILTER':
	    	console.log(action.payload);
	    	return action.payload;
	    default:
      		return undefined;
	}
}


