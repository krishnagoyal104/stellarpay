import firebase from 'react-native-firebase';
import {uiStartLoading, uiStopLoading} from './transaction';
import {goToHome} from '../App';

export const requestOtp = (data, _function) => {
  return async(dispatch) => {
    dispatch(uiStartLoading());
    try{
      const {number} = data;
      const result = await firebase.auth().signInWithPhoneNumber('+91 9971505705'); //number
      console.log(result);
      dispatch(uiStopLoading());
      _function(data, result);
    }
    catch(e){
      console.log(e);
      dispatch(uiStopLoading());
    }
  };
};

export const confirmOtp = (code, firebase) => {
  return async(dispatch) => {
    dispatch(uiStartLoading());
    try{
      const result = await firebase.confirm(code);
      console.log(result);
      dispatch(uiStopLoading());
      goToHome();
    }
    catch(e){
      console.log(e);
      dispatch(uiStopLoading());
    }
  };
};