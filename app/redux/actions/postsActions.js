import axios from "axios"
import {GET_POSTS_ERROR, GET_POSTS_SUCCESS} from "./actionTypes"
import authStorage from "../../utils/storage"

export const getPostsAction = () => async (dispatch) => {
  try {
    const token = await authStorage.getToken()
    const res = await axios.get(
      "https://mydiary-api-app.herokuapp.com/api/v2/entries",
      {headers: {token}}
    )
    const {data} = res.data

    return dispatch({type: GET_POSTS_SUCCESS, payload: data})
  } catch (error) {
    console.log("Action error", error)

    return dispatch({type: GET_POSTS_ERROR, payload: error.response.data.error})
  }
}
