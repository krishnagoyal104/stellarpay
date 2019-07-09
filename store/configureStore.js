import {AsyncStorage} from 'react-native';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist'
import thunk from 'redux-thunk';
import balanceReducer from '../reducers/balance';
import accountReducer from '../reducers/account';
import transactionReducer from '../reducers/transaction';
import ledgerReducer from '../reducers/ledger';
import receiverReducer from '../reducers/resolve';
import userReducer from '../reducers/signup';
import recentsReducer from '../reducers/recents';

let composeEnhancers = compose;

if(__DEV__){
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['balances', 'ledger', 'recents']
}

const rootReducer = combineReducers({
	balances: balanceReducer,
	account: accountReducer,
	ui: transactionReducer,
	ledger: ledgerReducer,
	recipient: receiverReducer,
	user: userReducer,
	recents: recentsReducer
  })

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
  const persistor = persistStore(store)
  return {store, persistor};
};