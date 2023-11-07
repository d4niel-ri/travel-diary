import { call, put, takeLatest } from 'redux-saga/effects';
import { changeUserBookmarks, getAllUsers } from '../domain/api';
import { CHANGE_USER_BOOKMARKS, USER_LOGIN, USER_LOGOUT } from './constants';
import { setErrorMessage, setUser } from './actions';
import { useSetValToLocal } from '../hooks/localStorage';

export function* doUserLogin({ inputs, handleCloseModal }) {
  console.log("<<< DO USER LOGIN");

  try {
    const allUsers = yield call(getAllUsers);
    console.log(allUsers, "<<< ALL USERS");
    console.log(inputs, "<<< INPUTS");

    const userFiltered = allUsers.filter((user) => user.email === inputs.email && user.password === inputs.password);
    if (userFiltered.length === 0) {
      yield put(setErrorMessage("Wrong email or password input"));
    } else {
      yield put(setUser(userFiltered[0]));
      yield put(setErrorMessage(""));
      yield call(useSetValToLocal, "user", userFiltered[0]);
      yield call(handleCloseModal);
    }

  } catch(error) {
    console.log(error, '<<< ERROR');
  }
}

export function* doUserLogout({ navigate }) {
  try {
    yield put(setUser(null));
    yield call(useSetValToLocal, "user", null);
    yield call(navigate);
  } catch(error) {
    console.error(error, "<<< ERROR");
  }
}

export function* doChangeUserBookmarks({ user, bookmarkIDs }) {
  try {
    const newUser = yield call(changeUserBookmarks, user, bookmarkIDs);
    yield put(setUser(newUser));
    yield call(useSetValToLocal, "user", newUser);
  } catch(error) {
    console.error(error, "<<< ERROR");
  }
}

export default function* appSaga() {
  yield takeLatest(USER_LOGIN, doUserLogin);
  yield takeLatest(USER_LOGOUT, doUserLogout);
  yield takeLatest(CHANGE_USER_BOOKMARKS, doChangeUserBookmarks);
}