import axios from 'axios';
import {fetchAccount, createAccount} from '../utils/account';

export const setKeypair = (publicKey, secretKey) => {
  return {
    type: 'SET_KEYPAIR',
    keypair: {publicKey, secretKey}
  };
};

export const fetchKeypair = () => {
  return async(dispatch, getState) => {
  	try{
  		const credentials = await fetchAccount();
  		if(credentials){
  		dispatch(setKeypair(credentials.username, credentials.password));
  		return Promise.resolve();
  		}
	  	else{
	  		const {publicKey, secretKey} = await createAccount();
	  		dispatch(setKeypair(publicKey, secretKey));
	  	}
	  }	
  	catch(e){
  		return Promise.reject();
  	}
  };
};