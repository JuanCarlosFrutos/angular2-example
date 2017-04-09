  /**
	* Hashtags have two attributes
	*	1. Name
	*	2. Array with all tweets (his ids) that contain this hashtag
	*/
	
export class Hashtag {
	constructor(
	    public name  : string, 
        public tweets: number [], 
    ){}
}
