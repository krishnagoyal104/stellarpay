import axios from 'axios';
import {getStream} from '../utils/account';

export const setBalance = (balances) => {
  return {
    type: 'SET_BALANCES',
    balances
  };
}; 

export const getBalance = () => {
  return (dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    return axios(`https://horizon-testnet.stellar.org/accounts/${publicKey}`)
    .then((res) => {
    	const balances = res.data.balances;
    	dispatch(setBalance(balances));
    })
    .catch((e) => {
    	console.log(e);
    });
  };
};

export const getStreamForAccount = () => {
  return(dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    console.log('streaming...................', publicKey);
    getStream(publicKey, dispatch, getBalance);
  }
}