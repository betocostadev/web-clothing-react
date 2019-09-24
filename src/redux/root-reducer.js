// This is the overall reducer
import { combineReducers } from 'redux';
// Use for data persistance
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import sessionStorage from 'redux-persist/lib/storage/session' -> For session storage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// Persist config - Only storing the cart since firebase handles the user
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);