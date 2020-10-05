import {
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_ERROR,
  EDIT_POST_ERROR,
  EDIT_POST_SUCCESS,
} from "../actions/actionTypes"

export default (state = {data: null, error: null}, action) => {
  switch (action.type) {
    case EDIT_POST_SUCCESS:
      // console.log("REDUCER++++++++++", action.payload)
      return {...state, data: action.payload}
    case EDIT_POST_ERROR:
      return {...state, error: action.payload}
    case GET_SINGLE_POST_SUCCESS:
      return {...state, data: action.payload}
    case GET_SINGLE_POST_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}
