import axios from 'axios';
import {uiStartLoading, uiStopLoading} from './transaction';
import {setError} from './error';
import {config} from '../config/config';

export const setLedger = (ledger, order) => {
  return {
    type: 'SET_LEDGER',
    payload: {ledger, order}
  };
};

export const getLedger = (cursor, order) => {
  return async(dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    dispatch(uiStartLoading('ledger'));
    var url;
    if(cursor){
      url = `${config.baseUrl}/getLedger/${publicKey}?cursor=${cursor}&order=${order}`;
    }
    else{
      url = `${config.baseUrl}/getLedger/${publicKey}`;
    }
    try{
      const result = await axios(url);
      const transactions = result.data.data;
      dispatch(setLedger(transactions, order));
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
