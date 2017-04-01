import { Hashtag } from '../../models/hashtag';
import { Action } from '@ngrx/store';

export function HashtagsReduce (state: Hashtag [] = [], action : Action) {

	switch(action.type){
		/**
		  *Search for one hashtag that has the same name, if exists it adds the tweet id to this hashtag.
		  *If any hashtag has this name, it add a new hashtag in the state.
		  */
	    case 'HASHTAG_ADD':
	    	return [...state, action.payload];	 
	    case 'HASHTAG_UPDATE':
	    	console.log(action.payload);
 			state[action.payload[0]].tweets.push(action.payload[1]);
	    default:
	      return state;
 	}
}


