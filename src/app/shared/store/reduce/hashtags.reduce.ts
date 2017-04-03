import { Hashtag } from '../../models/hashtag';
import { Action } from '@ngrx/store';

  /**
    * HashtagsReduce.
    *
    * Add new hashtag to hashtag store 
    *
    * @param action.payload must be type Tweet
	*
    * @return Tweet[] that contains all tweets in the system.
    *                    
    */

export function HashtagsReduce (state: Hashtag [] = [], action : Action) {

	switch(action.type){
	    case 'HASHTAG_ADD':
	    	return [...state, action.payload];	 
	    case 'HASHTAG_UPDATE':
	    	console.log(action.payload);
 			state[action.payload[0]].tweets.push(action.payload[1]);
	    default:
	      return state;
 	}
}


