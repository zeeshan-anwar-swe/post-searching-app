import { 
    FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_FAIL,
     
    FETCH_SEARCH_REQUEST, 
    FETCH_SEARCH_SUCCESS, 
    FETCH_SEARCH_FAIL, 
} from "../actions/actionType";

// Initial state
const initialState = {
loading: true,
error: "",
posts: [],
post: {},
};

// Post reducer
export const postsReducer = (state = initialState, action) => {
    switch(action.type){

        //For fetchin handling=========//
        case FETCH_POSTS_REQUEST:
            return{
            ...state,
            loading: true,
            }

        case FETCH_POSTS_SUCCESS:
            return{
            ...state,
            posts: action.payload,
            loading: false,
            }

        case FETCH_POSTS_FAIL:
            return{
            ...state,
            loading: false,
            }


        //For searching handling=========//
        case FETCH_SEARCH_REQUEST:
            return{
            ...state,
            loading: true,
            }

        case FETCH_SEARCH_SUCCESS:
            console.log(action.payload);
            return{
            ...state,
            posts: [action.payload],
            loading: false,
            }

        case FETCH_SEARCH_FAIL:
            return{
            ...state,
            posts: [],
            error: action.payload,
            loading: false,
            }
        
        // By default=========//
        default:
            return state;
    }
};
