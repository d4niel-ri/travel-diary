import axios from "axios";

const baseURL = 'http://localhost:3000';

const urls = {
  posts: 'posts',
  users: 'users'
}

export const callAPI = async (endpoint, method, headers, params, data) => {
  const options = {
    baseURL,
    url: endpoint,
    method,
    headers,
    params,
    data
  }

  const response = await axios(options);
  return response?.data;
}

export const getAllPost = () => {
  return callAPI(urls.posts, "GET");
}

export const getPostByID = (id) => {
  return callAPI(urls.posts, "GET", {}, {id: id});
}

export const getAllPostByAuthorID = (authorID) => {
  return callAPI(urls.posts, "GET", {}, {author_id: authorID});
}

export const getUserByID = (id) => {
  return callAPI(urls.users, "GET", {}, {id: id});
}

export const getAllUsers = () => {
  return callAPI(urls.users, "GET");
}

export const changeUserBookmarks = (user, bookmarkIDs) => {
  return callAPI(`${urls.users}/${user.id}`, "PUT", {}, {}, {...user, bookmark_ids: bookmarkIDs});
}

export const createPost = (post) => {
  return callAPI(urls.posts, 'POST', {}, {}, post);
}