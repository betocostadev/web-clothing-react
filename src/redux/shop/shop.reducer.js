// import SHOP_DATA from './shop.data';
// Import shop data and get collections from there.
import ShopActionTypes from './shop.types';

// Now setting the initial state to null since we will get it from firebase
const INITIAL_STATE = {
  collections: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;