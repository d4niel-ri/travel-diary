import { call, put, takeLatest } from 'redux-saga/effects'
import { setLoading } from "./actions";
import { createPost } from '../../domain/api';
import { CREATE_POST } from './constants';

export function* doCreatePost({ post, navigate }) {
  yield put(setLoading(true));
  try {
    const response = yield call(createPost, post);
    yield call(navigate);
  } catch (error) {
    console.log(error, '<<< ERROR');
  }
  yield put(setLoading(false));
}

export default function* newJouneySaga() {
  yield takeLatest(CREATE_POST, doCreatePost);
}