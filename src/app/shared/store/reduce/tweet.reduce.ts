import { Tweet } from '../../models/tweet';
import { Action } from '@ngrx/store';
import { TweetActions } from '../actions/tweet.action';

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

	    case TweetActions.TWEET_ADD:
	    	return [...state, action.payload];

	    case TweetActions.TWEET_LIKE:
			 if (state.indexOf(action.payload) != -1)
	    	 state[state.indexOf(action.payload)].like += 1;
	    	 return state;

	    case TweetActions.TWEET_DISLIKE:
	    	 if (state.indexOf(action.payload) != -1)
	    	 state[state.indexOf(action.payload)].dislike += 1;
	    	 return state;

	    default:
	      	return state;
 	}
}

