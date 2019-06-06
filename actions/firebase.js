import axios from 'axios';
import {AsyncStorage} from 'react-native';
import firebase from 'react-native-firebase';
import {uiStartLoading, uiStopLoading} from './transaction';
import {setError} from './error';
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
      if(!e.response){
        dispatch(setError('Network Error', 'Please check your internet connection.'))
      }
      dispatch(uiStopLoading('user'));
    }
  };
};

export const confirmOtp = (_code, _firebase, _data) => {
  return async(dispatch, getState) => {
    dispatch(uiStartLoading('user'));
    try{
      await _firebase.confirm(_code);
      const token = await firebase.auth().currentUser.getIdToken(true);
      const fcmToken = await getToken();
      await dispatch(fetchKeypair());
      const publicKey = getState().account.publicKey;
      const credentials = {token, publicKey, fcmToken, ..._data};
      await dispatch(signUp(credentials));
      dispatch(uiStopLoading('user'));
      goToHome();
    }
    catch(e){
      if(!e.response){
        dispatch(setError('Network Error', 'Please check your internet connection.'))
      }
      dispatch(uiStopLoading('user'));
    }
  };
};