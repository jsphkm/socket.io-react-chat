import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import landingpageReducer from './reducers/main';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    main: landingpageReducer,
  }),
  composeEnhancer(applyMiddleware(thunk))
)

export default store;
