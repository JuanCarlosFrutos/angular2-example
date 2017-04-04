import { Tweet } from '../../models/tweet';
import { Action } from '@ngrx/store';

  /**
    * TweetReduce.
    *
    * Add new tweet to user store 
    *
    * @param action.payload must be type Tweet
	*
    * @return Tweet[] that contains all tweets in the system.
    *                    
    */

export function TweetReduce (state: Tweet [] = [], action : Action) {

	let ind : number;

	switch(action.type){
	    case 'TWEET_ADD':
	    	return [...state, action.payload];
	    case 'TWEET_LIKE':
	    	 return state.map((tweet : Tweet, index : number) => {
	    	 	//if (tweet.id === action.payload.id){};
	    	 		//tweet.like = 2;
	    	 		tweet = tweet;
	    	 	
	    	 })
	    	 // state[ind].like = state[ind].like + 1;
	    	 // console.log(state[ind]);
	    default:
	      	return state;
 	}
}

