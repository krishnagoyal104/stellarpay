import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import balanceReducer from '../reducers/balance';
/*let composeEnhancers = compose;

if(__DEV__){
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
}*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
	balances: balanceReducer	
  }),
  composeEnhancers(applyMiddleware(thunk))
		  
  );
  return store;
};