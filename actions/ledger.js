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

export const clearLedger = () => {
  return {
    type: 'CLEAR_LEDGER',
  };
};

export const getLedger = (cursor) => {
  return async(dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    dispatch(uiStartLoading('ledger'));
    var url;
    if(cursor){
      url = `${config.baseUrl}/getLedger/${publicKey}?cursor=${cursor}`;
    }
    else{
      url = `${config.baseUrl}/getLedger/${publicKey}`;
      dispatch(clearLedger());
    }
    try{
      const result = await axios(url);
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
