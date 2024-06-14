import IPost from "./types/post";
import Post from "./post";
import Moment from "react-moment";

export function PostsView({ posts }: { posts: IPost[] }) {
	const recentPosts = posts.filter((post) => {
		const oneHourAgo = new Date();
		oneHourAgo.setHours(oneHourAgo.getHours() - 1);
		return new Date(post.fetchedDate) > oneHourAgo;
	});
	return (
		<div className="container mx-auto py-8 px-4 md:px-6">
			<div className="grid gap-8">
				<div>
					<h2 className="text-2xl font-bold mb-4">
						Posts That Hit 9GAG Trending in the Last 1 Hour
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{recentPosts.map((post) => (
							<Post key={post.id} post={post} />
						))}
					</div>
				</div>
				<div>
					<h2 className="text-2xl font-bold mb-4">All Posts</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{posts.map((post) => (
							<Post key={post.id} post={post} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
