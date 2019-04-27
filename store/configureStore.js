import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import balanceReducer from '../reducers/balance';
import accountReducer from '../reducers/account';
import transactionReducer from '../reducers/transaction';
import ledgerReducer from '../reducers/ledger';
import receiverReducer from '../reducers/resolve';
import signupReducer from '../reducers/signup';
/*let composeEnhancers = compose;

if(__DEV__){
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
}*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
	balances: balanceReducer,
	account: accountReducer,
	ui: transactionReducer,
	ledger: ledgerReducer,
	recipient: receiverReducer,
	user: signupReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
		  
  );
  return store;
};