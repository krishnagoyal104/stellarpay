import axios from 'axios';
import {uiStartLoading, uiStopLoading} from './transaction';
import {goToHome} from '../App';

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user
  };
};

export const signUp = (data) => {
  return async(dispatch, getState) => {
    dispatch(uiStartLoading());
    const publicKey = getState().account.publicKey;
    console.log({publicKey, ...data});
    try{
      const result = await axios({
        method: 'post',
        url: 'http://192.168.1.8:3000',
        data: {publicKey, ...data}
      });
      dispatch(setUser(data));
      dispatch(uiStopLoading());
      goToHome();
    }
    catch(e){
      console.log(e);
      dispatch(uiStopLoading());
    }
  }
}

export const getUser = (data) => {
  return async(dispatch, getState) => {
    const publicKey = getState().account.publicKey;
    try{
      const result = await axios({
        method: 'post',
        url: 'http://192.168.1.8:3000',
        data: {publicKey, ...data}
      });
      dispatch(setUser(data));
      dispatch(uiStopLoading());
      goToHome();
    }
    catch(e){
      console.log(e);
      dispatch(uiStopLoading());
    }
  }
} 