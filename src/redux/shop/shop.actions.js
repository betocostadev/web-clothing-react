import ShopActionTypes from './shop.types';
/* export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
}); */

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

// Now fetch collections, since we are using redux-thunk
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    // Code previously from shop.component
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      // updateCollections(collectionsMap);
      dispatch(fetchCollectionsSuccess(collectionsMap));
      // this.setState({loading: false});
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
};