import { Hashtag } from '../../models/hashtag';
import { Action } from '@ngrx/store';
import { HashtagActions } from '../actions/hashtag.action';

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
	    case HashtagActions.HASHTAG_ADD:
        
	    	return [...state, action.payload];	 

	    case HashtagActions.HASHTAG_UPDATE:	

          if (state.indexOf(action.payload.hashtag) != -1)
             state[state.indexOf(action.payload.hashtag)].tweets.push(action.payload.idTweet);
             return state;

	    default:
            return state;
 	}
}


