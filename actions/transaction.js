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

export const createTransaction = (_receiverPublicKey, _amount) => {
  return (dispatch, getState) => {
  	const publicKey = getState().account.publicKey;
  	const secretKey = getState().account.secretKey;
    transact(publicKey, secretKey, _receiverPublicKey, _amount);
  };
};