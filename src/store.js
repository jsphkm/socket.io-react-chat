import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import mainReducer from './reducers/main';
// import { formReducer } from 'redux-form';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    main: mainReducer,
  }),
  composeEnhancer(applyMiddleware(logger, thunk))
)

export default store;
