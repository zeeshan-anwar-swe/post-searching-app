import { FETCH_POSTS_FAIL, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS } from "./actionType"
import apiURL from "../../utils/apiURL";
import axios from "axios";

console.log();
//======Fecthing action for posts======//
const fetchPostsRequestAction = () => {
    return{
    type: FETCH_POSTS_REQUEST
    }
}

const fetchPostsSuccessAction = (post) =>{
    return{
    type: FETCH_POSTS_SUCCESS,
    payload: post,
    }
}

const fetchPostsFailAction = (error) =>{
    return{
    type: FETCH_POSTS_FAIL,
    payload: error,
    }
}


//======Fecthing action for single post======//
const searchRequestAction = () => {
    return{
    type: FETCH_SEARCH_REQUEST
    }
}

const searchSuccessAction = (post) =>{
    return{
    type: FETCH_SEARCH_SUCCESS,
    payload: post,
    }
}

const searchFailAction = (error) =>{
    return{
    type: FETCH_POSTS_FAIL,
    payload: error,
    }
}


// Fetch posts action
export const fetchPostsAction = () =>{
    return async (dispatch) => {
    dispatch(fetchPostsRequestAction());
	try {
	const data = await axios.get(apiURL).then((response) => {
	dispatch(fetchPostsSuccessAction(response.data));
	});
	}

	catch (error) {
	dispatch(fetchPostsFailAction(error));
	}
	};
};


// Search single post action
export const searchPostAction = (id) =>{
    return async (dispatch) => {
    dispatch(searchRequestAction());
    
	try {
	const data = await axios.get(`${apiURL}/${id}`).then((response) => {
	dispatch(searchSuccessAction(response.data));
	});
	}

	catch (error) {
	dispatch(searchFailAction(error));
	}
	};
};