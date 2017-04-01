import { Tweet } from '../../models/tweet';
import { Action } from '@ngrx/store';

export function TweetReduce (state: Tweet [] = [], action : Action) {

	switch(action.type){
	    case 'TWEET_ADD':
	    	return [...state, action.payload];
	    default:
	      	return state;
 	}
}
