// Import shop data and get collections from there.
// At least we are not using the Firebase DB to store the data.
import SHOP_DATA from './shop.data';
const INITIAL_STATE = {
  collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;