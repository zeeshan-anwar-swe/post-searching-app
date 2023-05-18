import thunk from "redux-thunk";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { postsReducer } from "../reducer/postReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const middleware = applyMiddleware(thunk)
export const store = createStore(postsReducer,composeWithDevTools(middleware));