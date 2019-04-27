import axios from 'axios';
import stellarSdk from 'stellar-sdk';
import {Keypair} from '@pigzbe/react-native-stellar-sdk';
import {AsyncStorage} from 'react-native';
import * as Keychain from 'react-native-keychain';

const server = new stellarSdk.Server('https://horizon-testnet.stellar.org');

export const createAccount = async (_dispatch, _function) => {
  const keypair = await Keypair.randomAsync();
  const publicKey = keypair.publicKey();
  const secretKey = keypair.secret();
  _dispatch(_function(publicKey, secretKey));
  Keychain.setGenericPassword(publicKey, secretKey);
  AsyncStorage.setItem('token', 'SignIn');
  try{
    const url = `https://horizon-testnet.stellar.org/friendbot?addr=${publicKey}`;
    await axios(url);
    console.log('Successfully funded account!!');
  }
  catch(error){
      console.log(error);
  }
}    

export const fetchAccount = async (_dispatch, _function) => {
    try {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
          console.log('Credentials successfully loaded for user ' + credentials.username);
          _dispatch(_function(credentials.username, credentials.password));
        }else {
          console.log('No credentials stored')
          createAccount(_dispatch, _function);
        }
    } 
    catch (error) {
        console.log('Keychain couldn\'t be accessed!', error);
  }
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
        console.log('Working');
      }
  });
}




