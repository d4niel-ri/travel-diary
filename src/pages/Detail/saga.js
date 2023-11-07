import { call, put, takeLatest } from 'redux-saga/effects'
import { setLoading, setPost } from "./actions";
import { getPostByID, getUserByID } from '../../domain/api';
import { GET_POST_BY_ID } from './constants';

export function* doGetPostByID({ id }) {
  yield put(setLoading(true));
  try {
    const response = yield call(getPostByID, id);

    // Fetch data for getting author name
    const userResponse = yield call(getUserByID, response[0].author_id);
    const postWithAuthor = {...response[0], author_name: userResponse[0].fullName};
    yield put(setPost(postWithAuthor));
  } catch (error) {
    console.log(error, '<<< ERROR');
  }
  yield put(setLoading(false));
}

export default function* detailSaga() {
  yield takeLatest(GET_POST_BY_ID, doGetPostByID);
}