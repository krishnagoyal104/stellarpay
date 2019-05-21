import axios from 'axios';
import {transact} from '../utils/transaction';

export const uiStartLoading = () => {
  return {
    type: 'UI_START_LOADING',
  };
};

export const uiStopLoading = () => {
  return {
    type: 'UI_STOP_LOADING',
  };
};

export const createTransaction = (_receiverPublicKey, _amount, _function, _code, _issuer) => {
  return (dispatch, getState) => {
    dispatch(uiStartLoading());
  	const publicKey = getState().account.publicKey;
  	const secretKey = getState().account.secretKey;
    const promise = transact(publicKey, secretKey, _receiverPublicKey, _amount, _code, _issuer);
    promise.then((res) => {
      dispatch(uiStopLoading());
      _function();
    })
    .catch((e) => {
      console.log(e)
      dispatch(uiStopLoading());
    });
  };
};