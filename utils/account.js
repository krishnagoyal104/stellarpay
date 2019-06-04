import axios from 'axios';
import stellarSdk from 'stellar-sdk';
import {Keypair} from '@pigzbe/react-native-stellar-sdk';
import {AsyncStorage} from 'react-native';
import * as Keychain from 'react-native-keychain';

const server = new stellarSdk.Server('https://horizon-testnet.stellar.org');

export const createAccount = () => {
  const promise = new Promise(async(resolve, reject) => {
    try{
      const keypair = await Keypair.randomAsync();
      const publicKey = keypair.publicKey();
      const secretKey = keypair.secret();
      Keychain.setGenericPassword(publicKey, secretKey);
      resolve({publicKey, secretKey});
    }
    catch(e){
      reject(e);
    }
  });
  return promise;
}

export const fundAccount = (publicKey) => {
  const promise = new Promise(async(resolve, reject) => {
    try{
      const url = `https://horizon-testnet.stellar.org/friendbot?addr=${publicKey}`;
      await axios(url);
      resolve();
    }
    catch(e){
      reject(e);
    }
  });
  return promise;
}

export const fetchAccount = () => {
  const promise = new Promise(async(resolve, reject) => {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        resolve(credentials);
      }else {
        resolve();
      }
    } 
    catch (e) {
      reject(e);
    }
  });
  return promise;
}       
 
export const loadAccount = async(_publicKey) => {
	const url = `https://horizon-testnet.stellar.org/accounts/${_publicKey}`;
	const response = await axios(url);
	return response;
}

export const getStream = (publicKey, _dispatch, _function) => {
  var es = server.payments()
  .forAccount(publicKey)
  .cursor('now')
  .stream({
      onmessage: res => {
        _dispatch(_function());
      }
  });
}




