import axios from 'axios';
import {transact} from '../utils/transaction';
import {setError} from './error';
import {config} from '../config/config';

export const uiStartLoading = (context) => {
  return {
    type: 'UI_START_LOADING',
    context
  };
};

export const uiStopLoading = (context) => {
  return {
    type: 'UI_STOP_LOADING',
    context
  };
};

export const createTransaction = (_receiverPublicKey, _amount, _function, _code, _issuer) => {
  return async(dispatch, getState) => {
    try{
      dispatch(uiStartLoading('transaction'));
      const publicKey = getState().account.publicKey;
      const secretKey = getState().account.secretKey;
      const hash = await transact(publicKey, secretKey, _receiverPublicKey, _amount, _code, _issuer);
      dispatch(uiStopLoading('transaction'));
      _function(hash, 'successful');
      const result = await axios({
        method: 'post',
        url: `${config.baseUrl}/notify`,
        data: {
          sender: publicKey,
          receiver: _receiverPublicKey,
          amount: _amount,
          code: _code || 'Lumens'
        }
      });
    }
    catch(e){
      console.log(e);
      if(!e.response){
        dispatch(setError('Network Error', 'Please check your internet connection.'))
      }
      dispatch(uiStopLoading('transaction'));
      _function(e.response.data.extras.result_codes.operations[0], 'failed');
    }    
  };
};