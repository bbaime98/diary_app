import {REDIRECT_USER} from "./actionTypes"

export const redirectUser = (redirect) => (dispatch) =>
  dispatch({type: REDIRECT_USER, payload: redirect})
