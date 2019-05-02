import axios from 'axios';
import {uiStartLoading, uiStopLoading} from './transaction';

export const setLedger = (ledger) => {
  return {
    type: 'SET_LEDGER',
    ledger
  };
};

export const getLedger = () => {
  return async(dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    dispatch(uiStartLoading());
    try{
      const result = await axios(`http://192.168.1.8:3000/getLedger/${publicKey}`);
      const transactions = result.data.data;
      dispatch(setLedger(transactions));
      dispatch(uiStopLoading());
    }
    catch(e){
      console.log(e);
      dispatch(uiStopLoading());
    }
  };
}  
