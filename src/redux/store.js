import { createStore, applyMiddleware} from 'redux';
// In this case, we will use the redux logger middleware to keep track of logs across states
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;