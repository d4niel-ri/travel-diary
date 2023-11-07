import { GET_ALL_POST_BY_AUTHOR, SET_ALL_POST, SET_LOADING } from "./constants";

export const getAllPostByAuthor = (userID) => ({
  type: GET_ALL_POST_BY_AUTHOR,
  userID
})

export const setAllPost = (posts) => ({
  type: SET_ALL_POST,
  posts
})

export const setLoading = (value) => ({
  type: SET_LOADING,
  value
});