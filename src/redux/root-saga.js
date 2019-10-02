// all will get an array of generators that we call
import { all, call } from 'redux-saga/effects'

import { fetchCollectionsStart } from './shop/shop.sagas'

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)])
}