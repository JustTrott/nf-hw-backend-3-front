import axios from "axios";

export const apiClient = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const fetchPosts = async () => {
	console.log(process.env.NEXT_PUBLIC_API_URL);
	const response = await apiClient.get("/posts");
	return response.data;
};
