import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from "../actions/actionTypes"

export default (state = {data: null, error: null}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, data: action.payload}
    case LOGIN_ERROR:
      return {...state, error: action.payload}
    case SIGNUP_SUCCESS:
      return {...state, data: action.payload}
    case SIGNUP_ERROR:
      return {...state, error: action.payload}
    default:
      return state
  }
}
