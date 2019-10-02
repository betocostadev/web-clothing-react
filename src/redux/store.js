import { createStore, applyMiddleware} from 'redux';
// Using redux-persist for data persistance
import { persistStore } from 'redux-persist';
// In this case, we will use the redux logger middleware to keep track of logs across states
import logger from 'redux-logger';
import rootReducer from './root-reducer';
// Redux Thunks for using middleware functions -> Replaced for redux-saga
// import thunk from 'redux-thunk';
// const middlewares = [thunk];
import rootSaga from './root-saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };