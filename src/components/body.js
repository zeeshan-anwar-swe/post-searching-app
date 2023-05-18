import { fetchPostsAction } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Post from "./post";
import "./body.css";

export default function MainBody() {
	const dispatch = useDispatch();
	// const [loading, setLoading] = React.useState(false);
	const storeData = useSelector((data) => {
		return data;
	});

	useEffect(() => {
		dispatch(fetchPostsAction());
		// eslint-disable-next-line
	}, []);

	console.log(storeData);
	return (
		<div className="bodyMain">
			{storeData.loading ? (
				<h1>Loading</h1>
			) : (
				<h1>Total Posts {storeData.posts.length}</h1>
			)}
			{storeData.posts.map((post) => (
				<Post id={post.id} title={post.title} body={post.body} />
			))}
		</div>
	);
}
