import {combineReducers} from "redux"
import loginReducer from "./loginReducer"
import postsReducer from "./PostsReducer"

export default combineReducers({
  loginReducer,
  posts: postsReducer,
})
