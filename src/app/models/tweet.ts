export class Tweet {
	constructor(
    	public id: Date, 
    	public author: String, 
    	public text:String,
    	public hashtags:Array<String>
    ){}
}
