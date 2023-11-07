import { CHANGE_USER_BOOKMARKS, SET_ERROR_MESSAGE, SET_LOADING, SET_USER, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "./constants";

export const userLogin = (inputs, handleCloseModal) => ({
  type: USER_LOGIN,
  inputs,
  handleCloseModal
})

export const userRegister = (inputs, handleCloseModal) => ({
  type: USER_REGISTER,
  inputs,
  handleCloseModal
})

export const userLogout = (navigate) => ({
  type: USER_LOGOUT,
  navigate
})

export const setUser = (user) => ({
  type: SET_USER,
  user
})

export const changeUserBookmarks = (user, bookmarkIDs) => ({
  type: CHANGE_USER_BOOKMARKS,
  user,
  bookmarkIDs
})

export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage
})

export const setLoading = (value) => ({
  type: SET_LOADING,
  value
})