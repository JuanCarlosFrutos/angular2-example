export class Tweet {
	constructor(
    	public id: Date, 
    	public author: string, 
    	public text:string,
    	public hashtags:Array<String>
    ){}
}
