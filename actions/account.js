import axios from 'axios';
import {fetchAccount} from '../utils/account';

export const setKeypair = (publicKey, secretKey) => {
  return {
    type: 'SET_KEYPAIR',
    keypair: {publicKey, secretKey}
  };
};

export const fetchKeypair = () => {
  return (dispatch, getState) => {
    return fetchAccount(dispatch, setKeypair);
  };
};