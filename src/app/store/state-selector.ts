//filter tweets
export const stateSelector = () => {
  return state => state
    .map(([filter, tweets]) => {
    	// if (filter != undefined && filter != "#all"){
    	//  	return tweets.filter(upgrade => upgrade.hashtags.includes(filter));
    	// }else{
    	// 	return tweets;
    	// }

    	return (filter != undefined && filter != "#all") ? tweets.filter(upgrade => upgrade.hashtags.includes(filter)) : tweets

    })
};