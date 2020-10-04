import axios from "axios"
import {
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
  REDIRECT_USER,
  EDIT_POST_ERROR,
  EDIT_POST_SUCCESS,
} from "./actionTypes"
import authStorage from "../../utils/storage"

export const getPostsAction = () => async (dispatch) => {
  try {
    const token = await authStorage.getToken()
    // console.log("GET POSTS____TOKEN", token)
    if (!token) {
      return dispatch({type: REDIRECT_USER, payload: false})
    }
    const res = await axios.get(
      "https://mydiary-api-app.herokuapp.com/api/v2/entries",
      {headers: {token}}
    )
    const {data} = res.data

    return dispatch({type: GET_POSTS_SUCCESS, payload: data})
  } catch (error) {
    console.log("GET POSTS___Action error", error)

    return dispatch({type: GET_POSTS_ERROR, payload: error.response.data.error})
  }
}

export const deletePostAction = (id) => async (dispatch) => {
  try {
    const token = await authStorage.getToken()
    const res = await axios.delete(
      `https://mydiary-api-app.herokuapp.com/api/v2/entries/${id}`,
      {headers: {token}}
    )
    const {data} = res.data

    return dispatch({type: DELETE_POST_SUCCESS, payload: data})
  } catch (error) {
    console.log("Action error delete___________-", error)

    return dispatch({
      type: DELETE_POST_ERROR,
      payload: error.response.data.error,
    })
  }
}
export const editPostAction = (postDetails, id) => async (dispatch) => {
  try {
    const token = await authStorage.getToken()
    const res = await axios.patch(
      `https://mydiary-api-app.herokuapp.com/api/v2/entries/${id}`,
      postDetails,
      {headers: {token}}
    )
    const {data} = res.data
    console.log("EDITE____RESPONSE", data)
    return dispatch({type: EDIT_POST_SUCCESS, payload: data})
  } catch (error) {
    console.log("Action error edite", error)

    return dispatch({
      type: EDIT_POST_ERROR,
      payload: error.response.data.error,
    })
  }
}
