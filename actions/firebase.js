import axios from 'axios';
import {AsyncStorage} from 'react-native';
import firebase from 'react-native-firebase';
import {uiStartLoading, uiStopLoading} from './transaction';
import alert from '../utils/alert';
import {getToken} from '../utils/fcm';
import {signUp} from './user';
import {fetchKeypair} from './account';
import {goToHome} from '../App';
import {config} from '../config/config';

export const requestOtp = (data, _function) => {
  return async(dispatch) => {
    dispatch(uiStartLoading('user'));
    try{
      const {number} = data;
      const result = await firebase.auth().signInWithPhoneNumber(number);
      dispatch(uiStopLoading('user'));
      if(_function){
        _function(data, result);
      }
    }
    catch(e){
      dispatch(uiStopLoading('user'));
      if(e.message === 'Network Error'){
        alert();
      }
      else if(e.code){
        alert('Auth Error', e.code);
      }
    }
  };
};

export const registerUser = (_dispatch, getState, _data) => {
  const promise = new Promise(async(resolve, reject) => {
    try{
      const token = await firebase.auth().currentUser.getIdToken(true);
      const fcmToken = await getToken();
      await _dispatch(fetchKeypair());
      const publicKey = getState().account.publicKey;
      const credentials = {token, publicKey, fcmToken, ..._data};
      await _dispatch(signUp(credentials));
      goToHome();
    }
    catch(e){
      reject(e);
    }
  });
  return promise;
}

export const confirmOtp = (_code, _firebase, _data) => {
  return async(dispatch, getState) => {
    dispatch(uiStartLoading('user'));
    try{
      await _firebase.confirm(_code);
      await registerUser(dispatch, getState, _data);
      dispatch(uiStopLoading('user'));
    }
    catch(e){
      dispatch(uiStopLoading('user'));
      if(e.code){
        alert('Auth Error', e.code);
      }
      else if(e.response.data.code === 11000){
        alert('Duplicate number', 'Account with given number already exists.');
      }
    }
  };
};

export const onAuthStateChanged = (_data) => {
  return (dispatch, getState) => {
    return firebase.auth().onAuthStateChanged(async(user) => {
      dispatch(uiStartLoading('user'));
      try{
        await registerUser(dispatch, getState, _data);
        dispatch(uiStopLoading('user'));
      }
      catch(e){
        dispatch(uiStopLoading('user'));
        if(e.message === 'Network Error'){
          alert();
        }
        else if(e.code){
          alert('Auth Error', e.code);
        }
        else if(e.response.data.code === 11000){
          alert('Duplicate number', 'Account with given number already exists.');
        }
      }
    });
  };
};  