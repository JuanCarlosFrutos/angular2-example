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
			 if (state.indexOf(action.payload.tweet) != -1){
			 	if(state[state.indexOf(action.payload.tweet)].like.indexOf(action.payload.idUser)<0)
	    		 	state[state.indexOf(action.payload.tweet)].like.push(action.payload.idUser);
			 }
	    	 return state;

	    case TweetActions.TWEET_DISLIKE:
	    	 if (state.indexOf(action.payload.tweet) != -1)
			 	if(state[state.indexOf(action.payload.tweet)].dislike.indexOf(action.payload.idUser)<0)
	    		 	state[state.indexOf(action.payload.tweet)].dislike.push(action.payload.idUser);
	    	 return state;

	    default:
	      	return state;
 	}
}

