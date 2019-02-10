import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import landingpageReducer from './reducers/main';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    main: landingpageReducer,
  }),
  composeEnhancer(applyMiddleware(logger, thunk))
)

export default store;
