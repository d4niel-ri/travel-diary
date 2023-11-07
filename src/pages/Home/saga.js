import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_ALL_POST, CREATE_POST } from './constants';
import { getAllPost, createPost, getUserByID } from '../../domain/api';
import { setAllPost, setLoading, setNewPost } from './actions';

export function* doGetAllPost() {
  yield put(setLoading(true));
  try {
    const response = yield call(getAllPost);

    // Create a mapping of author IDs to their full names
    const authorMapping = {};
    // Convert the authorIds array to a Set to ensure uniqueness
    const uniqueAuthorIds = new Set(response.map((post) => {
      authorMapping[post.author_id] = "";
      return post.author_id;
    }));
    // Convert the Set back to an array
    const authorIds = Array.from(uniqueAuthorIds);

    for (const authorId of authorIds) {
      const userResponse = yield call(getUserByID, authorId);
      authorMapping[authorId] = userResponse[0].fullName;
    }

    // Update the state with the author names in the posts
    const postsWithAuthors = response.map((post) => ({
      ...post,
      author_name: authorMapping[post.author_id],
    }));

    yield put(setAllPost(postsWithAuthors));
  } catch (error) {
    console.log(error, '<<< ERROR');
  }
  yield put(setLoading(false));
}

export function* doCreatePost({ post }) {
  console.log("<< Do Create Post Home");

  yield put(setLoading(true));
  try {
    const response = yield call(createPost, post);
    yield put(setNewPost(response));
    const posts = yield call(getAllPost);
    yield put(setAllPost(posts));
  } catch (error) {
    console.log(error, '<<< ERROR');
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(GET_ALL_POST, doGetAllPost);
  yield takeLatest(CREATE_POST, doCreatePost);
}