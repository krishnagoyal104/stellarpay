import axios from 'axios';
import stellarSdk from 'stellar-sdk';
import {uiStartLoading, uiStopLoading} from './transaction';
import {setError} from './error';
import {createTrustline} from './creditAccount';

export const createTrustWithAnchor = (_function, _url, _code, _limit) => {
  return async(dispatch, getState) => {
    dispatch(uiStartLoading('credit'));
    try{
      const result = await stellarSdk.StellarTomlResolver.resolve(_url);
      const currencies = result.CURRENCIES;
      let currency;

      if(Array.isArray(currencies)){
        currency = result.CURRENCIES.find((_currency) => {
          return _currency.code === _code.toUpperCase();
        });
      }
      else if(typeof currencies === 'object'){
        if(currencies.code === _code.toUpperCase()){
          currency = currencies;
        }
      }

      if(currency !== undefined){
        const {code, issuer} = currency;
        const limit = _limit;
        dispatch(createTrustline(_function, null, issuer, code, limit));
      }
      else{
        dispatch(uiStopLoading('credit'));
        dispatch(setError('Asset not found', `Could not find ${_code} associated with this issuer.`));
      }
    }
    catch(e){
      if(!e.response){
        dispatch(setError('Network Error', 'Please check your internet connection.'))
      }
      dispatch(uiStopLoading('credit'));
    }
  };
};