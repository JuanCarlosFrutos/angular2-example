export class Tweet {
	constructor(
		public id : number,
    	public date: Date, 
    	public author: string, 
    	public text: string,
    	public like: number,
    	public dislike : number
    ){
    }
}
