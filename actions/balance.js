import axios from 'axios';
import {getStream} from '../utils/account';
import {uiStartLoading, uiStopLoading} from './transaction';
import {setError} from './error';
import {fundAccount} from '../utils/account';

export const setBalance = (balances) => {
  return {
    type: 'SET_BALANCES',
    balances
  };
}; 

export const getBalance = () => {
  return async(dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    dispatch(uiStartLoading('balance'));
    try{
      const result = await axios(`https://horizon-testnet.stellar.org/accounts/${publicKey}`)
      const balances = result.data.balances;
      dispatch(setBalance(balances));
      dispatch(uiStopLoading('balance'));
    }
    catch(e){
      if(!e.response){
        dispatch(setError('Network Error', 'Please check your internet connection.'))
      }
      dispatch(uiStopLoading('balance'));
    }
  };
};

export const fundUserAccount = () => {
  return async(dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    dispatch(uiStartLoading('balance'));
    try{
      await fundAccount(publicKey);
      const result = await axios(`https://horizon-testnet.stellar.org/accounts/${publicKey}`)
      const balances = result.data.balances;
      dispatch(setBalance(balances));
      dispatch(uiStopLoading('balance'));
    }
    catch(e){
      if(!e.response){
        dispatch(setError('Network Error', 'Please check your internet connection.'))
      }
      dispatch(uiStopLoading('balance'));
    }
  };
};

export const getStreamForAccount = () => {
  return(dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    getStream(publicKey, dispatch, getBalance);
  }
}