import axios from 'axios';
import stellarSdk from 'stellar-sdk';
import * as Keychain from 'react-native-keychain';
import {setKeypair} from './account';
import {uiStartLoading, uiStopLoading} from './transaction';
import {setError} from './error';
import {config} from '../config/config';

export const importAccount = (_privateKey, _function1, _function2) => {
  return async(dispatch) => {
    dispatch(uiStartLoading('user'));
    try{
      const keypair = stellarSdk.Keypair.fromSecret(_privateKey);
      const publicKey = stellarSdk.StrKey.encodeEd25519PublicKey(keypair._publicKey);
      const secretKey = _privateKey;
      const result = await axios(`${config.baseUrl}/import/${publicKey}`);
      if(result.data){
        Keychain.setGenericPassword(publicKey, secretKey);
        dispatch(setKeypair(publicKey, secretKey));
        const {name, number} = result.data;
        _function1(name, number);
      }
      else{
        Keychain.setGenericPassword(publicKey, secretKey);
        _function2(publicKey, secretKey);
      }
      dispatch(uiStopLoading('user'));
    }
    catch(e){
      if(!e.response){
        dispatch(setError('Network Error', 'Please check your internet connection.'))
      }
      else{
        dispatch(setError('Invalid keys', 'Incorrect checksum or length. Please enter valid keys.'));
      }
      dispatch(uiStopLoading('user'));
    }
  };
};