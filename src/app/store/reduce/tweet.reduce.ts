
export const TweetReduce = (state: any = [], action) => {

	switch(action.type){
	    case 'TWEET_ADD':
	    	console.log(state);
	    	return [...state, action.payload];
	    default:
	      return state;
 	}
}
