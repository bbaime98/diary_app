import {combineReducers} from "redux"
import loginReducer from "./loginReducer"
import postsReducer from "./PostsReducer"
import {redirectReducer} from "./redirectUserReducer"
import singlePostReducer from "./singlePostReducer"

export default combineReducers({
  loginReducer,
  posts: postsReducer,
  redirect: redirectReducer,
  singlePost: singlePostReducer,
})
