import { GET_ALL_POST_BY_BOOKMARKS, SET_ALL_POST, SET_LOADING } from "./constants";

export const getAllPostByBookmarks = (bookmarkIDs) => ({
  type: GET_ALL_POST_BY_BOOKMARKS,
  bookmarkIDs
})

export const setAllPost = (posts) => ({
  type: SET_ALL_POST,
  posts
})

export const setLoading = (value) => ({
  type: SET_LOADING,
  value
});