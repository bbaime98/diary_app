import axios from "axios"
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from "./actionTypes"

export const loginAction = (user) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://mydiary-api-app.herokuapp.com/api/v2/auth/signin",
      user
    )
    const {data} = res.data

    return dispatch({type: LOGIN_SUCCESS, payload: data})
  } catch (error) {
    return dispatch({type: LOGIN_ERROR, payload: error.response.data.error})
  }
}
export const signupAction = (user) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://mydiary-api-app.herokuapp.com/api/v2/auth/signup",
      user
    )
    const {data} = res.data

    return dispatch({type: SIGNUP_SUCCESS, payload: data})
  } catch (error) {
    return dispatch({type: SIGNUP_ERROR, payload: error.response.data.error})
  }
}
