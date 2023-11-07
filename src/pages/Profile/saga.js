import { call, put, takeLatest } from 'redux-saga/effects'
import { setAllPost, setLoading } from "./actions";
import { getAllPostByAuthorID } from '../../domain/api';
import { GET_ALL_POST_BY_AUTHOR } from './constants';

export function* doGetAllPostByAuthor({ userID }) {
  yield put(setLoading(true));
  try {
    const response = yield call(getAllPostByAuthorID, userID);
    yield put(setAllPost(response));
  } catch (error) {
    console.log(error, '<<< ERROR');
  }
  yield put(setLoading(false));
}

export default function* profileSaga() {
  yield takeLatest(GET_ALL_POST_BY_AUTHOR, doGetAllPostByAuthor);
}