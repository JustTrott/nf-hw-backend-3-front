import IPost from "./types/post";
import Post from "./post";
import Moment from "react-moment";

export function PostsView({ posts }: { posts: IPost[] }) {
	// save posts that hit 9GAG trending in the last 1 hour in recentPosts, save the rest in oldersPosts
	const [recentPosts, oldersPosts] = posts.reduce(
		([recentPosts, oldersPosts], post) => {
			const now = new Date();
			const postDate = new Date(post.date);
			const diff = (now.getTime() - postDate.getTime()) / 1000 / 60 / 60;
			return diff <= 1
				? [[...recentPosts, post], oldersPosts]
				: [recentPosts, [...oldersPosts, post]];
		},
		[[], []] as [IPost[], IPost[]]
	);

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
					<h2 className="text-2xl font-bold mb-4">Older Posts</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{oldersPosts.map((post) => (
							<Post key={post.id} post={post} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
