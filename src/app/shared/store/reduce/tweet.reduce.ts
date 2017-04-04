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

	    	 state[state.indexOf(action.payload)].like += 1;
	    	 return state;

	    case 'TWEET_DISLIKE':

	    	 state[state.indexOf(action.payload)].dislike += 1;
	    	 return state;

	    default:
	      	return state;
 	}
}

