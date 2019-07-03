import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {config} from '../config/config';

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user
  };
};

export const setUserStorage = (name, number) => {
  AsyncStorage.setItem('token', 'SignedIn');
  AsyncStorage.setItem('name', name);
  AsyncStorage.setItem('number', number);
}

export const signUp = (credentials) => {
  return async(dispatch) => {
    try{
      const result = await axios({
        method: 'post',
        url: `${config.baseUrl}/signup`,
        data: {...credentials}
      });
      const {name, number} = credentials;
      setUserStorage(name, number);
      dispatch(setUser({name, number}));
      return Promise.resolve();
    }
    catch(e){
      return Promise.reject(e);
    }
  }
}

export const getUser = (data) => {
  return async(dispatch, getState) => {
    try{
      const name = await AsyncStorage.getItem('name');
      const number = await AsyncStorage.getItem('number');
      dispatch(setUser({name, number}));
    }
    catch(e){
      console.log(e);
    }
  }
} 