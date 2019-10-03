// all will get an array of generators that we call
import { all, call } from 'redux-saga/effects'

import { fetchCollectionsStart } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas'

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)])
}