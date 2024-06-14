"use client";
import Image from "next/image";
import { PostsView } from "@/components/posts-view";
import React, { useEffect, useState } from "react";
import { fetchPosts } from "./api/apiClient";
import IPost from "@/components/types/post";

export default function Home() {
	const [posts, setPosts] = useState<IPost[]>([]);

	useEffect(() => {
		fetchPosts().then((posts) => {
			setPosts(posts);
		});
	}, []);

	if (posts.length === 0) {
		return (
			<main>
				<h1>Loading...</h1>
			</main>
		);
	}

	return (
		<main>
			<PostsView posts={posts} />
		</main>
	);
}
