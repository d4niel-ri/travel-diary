import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_ALL_POST, CREATE_POST } from './constants';
import { getAllPost, createPost } from '../../domain/api';
import { setAllPost, setNewPost } from './actions';

export function* doGetAllPost() {
  try {
    const response = yield call(getAllPost);
    yield put(setAllPost(response));
  } catch (error) {
    console.log(error, '<<< ERROR');
  }
}

export function* doCreatePost({ post }) {
  try {
    const response = yield call(createPost, post);
    yield put(setNewPost(response));
    const posts = yield call(getAllPost);
    yield put(setAllPost(posts));
  } catch (error) {
    console.log(error, '<<< ERROR');
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_ALL_POST, doGetAllPost);
  yield takeLatest(CREATE_POST, doCreatePost);
}