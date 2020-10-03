import {combineReducers} from "redux"
import loginReducer from "./loginReducer"
import postsReducer from "./PostsReducer"
import {redirectReducer} from "./redirectUserReducer"

export default combineReducers({
  loginReducer,
  posts: postsReducer,
  redirect: redirectReducer,
})
