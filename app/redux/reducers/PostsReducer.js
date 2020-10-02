import {GET_POSTS_ERROR, GET_POSTS_SUCCESS} from "../actions/actionTypes"

export default (state = {data: null, error: null}, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {...state, data: action.payload}
    case GET_POSTS_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}
