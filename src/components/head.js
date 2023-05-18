import { fetchPostsAction, searchPostAction } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
import React from "react";
import "./head.css";

export default function Head() {

	const dispatch = useDispatch();
	const [search, setSearch] = React.useState("");

	const handleSearch = (event) => {
		event.preventDefault();
		dispatch(searchPostAction(search))
	};

	const handleFetch = (event) => {
		event.preventDefault();
		dispatch(fetchPostsAction());
		
	}

	return (
		<div className="headMain">
			<h2>Ract Redux Project</h2>
			<p>
				This project is simple React Redux Project that fetches data with search
				functionilty from an API
			</p>
			<form onSubmit={handleSearch}>
				<input
					type="number"
					name="search"
					min={1}
					max={100}
					placeholder="Enter the post No."
                    onChange={(e)=> setSearch(e.target.value)}
					required
				/>
				<button className="btn1">Search</button>
			</form>
			<button className="btn2" onClick={handleFetch}><b>Get all posts</b></button>
		</div>
	);
}
