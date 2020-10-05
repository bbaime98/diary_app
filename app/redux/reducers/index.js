import {combineReducers} from "redux"
import authReducer from "./authReducer"
import postsReducer from "./PostsReducer"
import {redirectReducer} from "./redirectUserReducer"
import singlePostReducer from "./singlePostReducer"

export default combineReducers({
  authReducer,
  posts: postsReducer,
  redirect: redirectReducer,
  singlePost: singlePostReducer,
})
