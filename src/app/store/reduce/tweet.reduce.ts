
export const TweetReduce = (state: any = [], action) => {

	switch(action.type){
    // case 'TWEET_WRITE':
    // 	console.log(action.payload);
    // 	return [action.payload];
    case 'TWEET_ADD':
    	return [...state, action.payload];
    default:
      return state;
 	}
}
