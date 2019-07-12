import axios from 'axios';
import {transact} from '../utils/transaction';
import {setRecent} from './recents';
import alert from '../utils/alert';
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
      const {publicKey, secretKey} = getState().account;
      const {name, number} = getState().recipient;
      const hash = await transact(publicKey, secretKey, _receiverPublicKey, _amount, _code, _issuer);
      dispatch(uiStopLoading('transaction'));
      if(name){
        dispatch(setRecent({name, number}));
      }
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
      dispatch(uiStopLoading('transaction'));
      if(!e.response){
        alert();
      }
      else if(e.response.status === 500){
        return;
      }
      else{
        _function(e.response.data.extras.result_codes.operations[0], 'failed');
      }
    }    
  };
};