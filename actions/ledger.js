import axios from 'axios';
import {uiStartLoading, uiStopLoading} from './transaction';
import {config} from '../config/config';
import alert from '../utils/alert';

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
      url = `${config.baseUrl}/transactions/${publicKey}?cursor=${cursor}&order=${order}`;
    }
    else{
      url = `${config.baseUrl}/transactions/${publicKey}`;
    }
    try{
      const result = await axios(url);
      const transactions = result.data.data;
      dispatch(setLedger(transactions, order));
      dispatch(uiStopLoading('ledger'));
    }
    catch(e){
      if(!e.response){
        alert();
      }
      dispatch(uiStopLoading('ledger'));
    }
  };
}  
