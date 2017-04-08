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

export function TweetReduce (state: Tweet []  = [] , action : Action) {

    let text: string = `Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.` 
    let text2: string = ` #holi Lorem ipsum dolor sit amet, 
                        consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient 
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                        pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel.` 
    state =  [new Tweet (-1, new Date(),"ADMIN", text, [], []),
                            new Tweet (-2, new Date(), "ADMIN", text, [], []),
                            new Tweet (-3, new Date(), "ADMIN", text, [], []),
                            new Tweet (-4, new Date(), "ADMIN", text2, [], []),
                            new Tweet (-5, new Date(), "ADMIN", text, [], []),
                            new Tweet (-6, new Date(), "ADMIN", text, [], []),
                            new Tweet (-7, new Date(), "ADMIN", text2, [], []),
                            new Tweet (-8, new Date(), "ADMIN", text, [], []),
                            new Tweet (-9, new Date(), "ADMIN", text, [], []),
                            new Tweet (-10, new Date(),"ADMIN", text, [], [])
                    ];

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

