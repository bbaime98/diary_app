import axios from "axios"
import {LOGIN_ERROR, LOGIN_SUCCESS} from "./actionTypes"

export const loginAction = (user) => async (dispatch) => {
  try {
    const res = await axios.post(
      "https://mydiary-api-app.herokuapp.com/api/v2/auth/signin",
      user
    )
    console.log("RESSPOOOOO", res.data)
    const {data} = res.data

    return dispatch({type: LOGIN_SUCCESS, payload: data})
  } catch (error) {
    return dispatch({type: LOGIN_ERROR, payload: error.response.data.error})
  }
}
