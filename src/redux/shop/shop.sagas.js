// takeEvery: listens for every action of a specific type we pass to it
// takeEvery is async, it will not block any other action to run
// takeLatest will pass only the latest value
// call: is the effect inside the generator function that invokes the method
// put: put is used to dispatch. It is the saga effect for creating actions
// import { takeEvery, call, put } from 'redux-saga/effects'
import { takeLatest, call, put } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync() {
  // yield console.log('Fired!')
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    // call will call convert... with the value we get from snapshot
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}