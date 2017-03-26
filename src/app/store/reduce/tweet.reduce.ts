
export const TweetReduce = (state: any = [], action) => {

	switch(action.type){
	    case 'TWEET_ADD':
	    	return [...state, action.payload];
	    default:
	      return state;
 	}
}
