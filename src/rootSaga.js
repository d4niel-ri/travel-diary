import { all } from 'redux-saga/effects'
import homeSaga from './pages/Home/saga'
import appSaga from './App/saga'
import profileSaga from './pages/Profile/saga'
import bookmarkSaga from './pages/Bookmark/saga'
import detailSaga from './pages/Detail/saga'
import newJouneySaga from './pages/NewJourney/saga'

export default function* rootSaga() {
  yield all([
    homeSaga(),
    appSaga(),
    profileSaga(),
    bookmarkSaga(),
    detailSaga(),
    newJouneySaga(),
  ])
}