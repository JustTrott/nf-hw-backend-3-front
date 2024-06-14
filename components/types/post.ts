export default interface IPost {
	id: string;
	title: string;
	type: string;
	date: Date;
	fetchedDate: Date;
	image: string;
	video?: string;
}
