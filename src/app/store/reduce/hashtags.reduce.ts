import { Hashtag } from '../../models/hashtag';

export const HashtagsReduce = (state: any [] = [], action) => {


	switch(action.type){
	    case 'HASHTAG_ADD':
	    	if (state.some((hashtag : Hashtag) => hashtag.name === action.payload.name)){
	    		state.forEach(
	    			(hashtag : Hashtag) => {
	    				if (hashtag.name === action.payload.name) 
	    					hashtag.tweets.push(action.payload.tweets[0]);
	    			}
	    		);
	    	}else{
	    		return [...state, action.payload];
	    	}	    	
	    default:
	      return state;
 	}

}
