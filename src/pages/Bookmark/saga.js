import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_ALL_POST_BY_BOOKMARKS } from './constants';
import { setAllPost, setLoading } from './actions';
import { getPostByID } from '../../domain/api';

export function* doGetAllPostByBookmarks({ bookmarkIDs }) {
  yield put(setLoading(true));
  try {
    const posts = [];

    for (const bookmarkID of bookmarkIDs) {
      const response = yield call(getPostByID, bookmarkID);
      posts.push(response[0])
    }
    yield put(setAllPost(posts));
  } catch (error) {
    console.log(error, "<<< ERROR");
  }
  yield put(setLoading(false));
}

export default function* bookmarkSaga() {
  yield takeLatest(GET_ALL_POST_BY_BOOKMARKS, doGetAllPostByBookmarks);
}