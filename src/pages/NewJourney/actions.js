import { CREATE_POST, SET_LOADING } from "./constants";

export const createPost = (post, navigate) => ({
  type: CREATE_POST,
  post,
  navigate
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  value
});