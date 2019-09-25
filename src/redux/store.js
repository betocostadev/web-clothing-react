import { createStore, applyMiddleware} from 'redux';
// Using redux-persist for data persistance
import { persistStore } from 'redux-persist';
// In this case, we will use the redux logger middleware to keep track of logs across states
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };