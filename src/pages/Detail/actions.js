import { GET_POST_BY_ID, SET_LOADING, SET_POST } from "./constants";

export const getPostByID = (id) => ({
  type: GET_POST_BY_ID,
  id
})

export const setPost = (post) => ({
  type: SET_POST,
  post
})

export const setLoading = (value) => ({
  type: SET_LOADING,
  value
});