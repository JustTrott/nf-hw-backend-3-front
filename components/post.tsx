import IPost from "./types/post";
import Moment from "react-moment";
import Image from "next/image";
import Link from "next/link";

export default function Post({ post }: { post: IPost }) {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			{post.video ? (
				<video className="w-full h-48 object-cover" controls>
					<source src={post.video} type="video/mp4" />
				</video>
			) : (
				<Image
					alt="Post Image"
					className="w-full h-48 object-cover"
					height={225}
					width={400}
					src={post.image}
					objectFit="cover"
				/>
			)}

			<div className="p-4">
				<Link href={`https://9gag.com/gag/${post.id}`}>
					<h3 className="text-lg font-semibold mb-2">{post.title}</h3>
				</Link>
				<p className="text-gray-500 text-sm">
					{<Moment fromNow>{post.date}</Moment>}
				</p>
			</div>
		</div>
	);
}
