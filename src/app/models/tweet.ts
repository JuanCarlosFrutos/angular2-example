export class Tweet {
	constructor(
    	public id: Number, 
    	public author: string, 
    	public text:string,
    	public hashtags:Array<String>
    ){}
}
