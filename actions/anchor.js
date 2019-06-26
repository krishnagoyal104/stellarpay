import axios from 'axios';
import stellarSdk from 'stellar-sdk';
import {uiStartLoading, uiStopLoading} from './transaction';
import {setError} from './error';

export const fetchAssets = (url) => {
  return async(dispatch, getState) => {
    dispatch(uiStartLoading('anchor'));
    try{
      const result = await stellarSdk.StellarTomlResolver.resolve(url);
      const currencies = result.CURRENCIES;
      let assets;
      if(Array.isArray(currencies)){
        assets = currencies;
      }
      else{
        assets.push(currencies);
      }
      dispatch(uiStopLoading('anchor'));
      return Promise.resolve(assets);
    }
    catch(e){
      if(!e.response){
        dispatch(setError('Network Error', 'Please check your internet connection.'))
      }
      dispatch(uiStopLoading('anchor'));
      return Promise.reject();
    }
  };
};