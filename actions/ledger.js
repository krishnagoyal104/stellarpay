import axios from 'axios';
import {uiStartLoading, uiStopLoading} from './transaction';
import {setError} from './error';
import {config} from '../config/config';

export const setLedger = (ledger) => {
  return {
    type: 'SET_LEDGER',
    ledger
  };
};

export const getLedger = () => {
  return async(dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    dispatch(uiStartLoading('ledger'));
    try{
      const result = await axios(`${config.baseUrl}/getLedger/${publicKey}`);
      const transactions = result.data.data;
      dispatch(setLedger(transactions));
      dispatch(uiStopLoading('ledger'));
    }
    catch(e){
      if(!e.response){
        dispatch(setError('Network Error', 'Please check your internet connection.'))
      }
      dispatch(uiStopLoading('ledger'));
    }
  };
}  
