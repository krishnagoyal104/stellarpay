import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {changeTrust} from '../utils/transaction';
import {uiStartLoading, uiStopLoading} from './transaction';
import alert from '../utils/alert';
import {config} from '../config/config';

export const createTrustline = (_function1, _function2, _issuer, _code, _limit) => {
  return async(dispatch, getState) => {
    dispatch(uiStartLoading('credit'));
    const {publicKey, secretKey} = getState().account;
    const code = _code || 'INR';
    const issuer = _issuer || 'GBBUWL3AA5LK5F7HFZNLNJNWOMW4XB6WFPP53IJQ527KDWE7Y24EVAMI';
    const limit = _limit || '10000';
    try{
      const hash = await changeTrust(publicKey, secretKey, code, issuer, limit);
      if(!_issuer){
        AsyncStorage.setItem('trust', 'created');
        _function2();
      }
      dispatch(uiStopLoading('credit'));
      _function1(limit, hash, 'trustline successful');
    }
    catch(e){
      dispatch(uiStopLoading('credit'));
      if(!e.response){
        alert();
      }
      else{
        _function1(limit, e.response.data.extras.result_codes.operations[0], 'trustline failed');
      }
    }
  }
};    

export const creditAccount = (_amount, _function) => {
  return async(dispatch, getState) => {
    dispatch(uiStartLoading('credit'));
    const publicKey = getState().account.publicKey;
    try{
      const result = await axios({
        method: 'post',
        url: `${config.baseUrl}/faucet`,
        data: {
          receiver: publicKey,
          amount: _amount
        }
      });
      dispatch(uiStopLoading('credit'));
      _function(_amount, result.data.hash, 'deposit successful');
    }
    catch(e){
      dispatch(uiStopLoading('credit'));
      if(!e.response){
        alert();
      }
      else{
        _function(_amount, e.response.data.extras.result_codes.operations[0], 'deposit failed');
      }
    }    
  };
}