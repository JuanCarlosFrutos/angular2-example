import { Hashtag } from '../../models/hashtag';
import { Action } from '@ngrx/store';

export function HashtagsReduce (state: Hashtag [] = [], action : Action) {

	switch(action.type){
		/**
		  *Search for one hashtag that has the same name, if exists it adds the tweet id to this hashtag.
		  *If any hashtag has this name, it add a new hashtag in the state.
		  */
	    case 'HASHTAG_ADD':
	    	if (state.some((hashtag : Hashtag) => hashtag.name === action.payload.name)){
	    		state.forEach(
	    			(hashtag : Hashtag) => {
	    				if (hashtag.name === action.payload.name) 
	    					hashtag.tweets.push(action.payload.tweets[0]);
	    			}
	    		);
	    		return state;
	    	}else{
	    		return [...state, action.payload];
	    	}	  	
	    default:
	      return state;
 	}
}


