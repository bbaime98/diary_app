import {REDIRECT_USER} from "../actions/actionTypes"

export default (state = {redirect: false}, action) => {
  switch (action.type) {
    case REDIRECT_USER:
      return {...state, redirect: action.payload}
    default:
      return state
  }
}
