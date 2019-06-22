import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {changeTrust} from '../utils/transaction';
import {uiStartLoading, uiStopLoading} from './transaction';
import {setError} from './error';
import {config} from '../config/config';

export const createTrustline = (_function1, _function2) => {
  return async(dispatch, getState) => {
    dispatch(uiStartLoading('credit'));
    const {publicKey, secretKey} = getState().account;
    const code = 'INR';
    const issuer = 'GBBUWL3AA5LK5F7HFZNLNJNWOMW4XB6WFPP53IJQ527KDWE7Y24EVAMI';
    try{
      const publicKey = getState().account.publicKey;
      const secretKey = getState().account.secretKey;
      const hash = await changeTrust(publicKey, secretKey, code, issuer);
      AsyncStorage.setItem('trust', 'created');
      _function2();
      dispatch(uiStopLoading('credit'));
      _function1(10000, hash, 'trustline successful');
    }
    catch(e){
      dispatch(uiStopLoading('credit'));
      if(!e.response){
        dispatch(setError('Network Error', 'Please check your internet connection.'))
      }
      _function1(10000, e.response.data.extras.result_codes.operations[0], 'trustline failed');
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
        dispatch(setError('Network Error', 'Please check your internet connection.'));
      }
      _function(_amount, e.response.data.error, 'deposit failed');
    }    
  };
}