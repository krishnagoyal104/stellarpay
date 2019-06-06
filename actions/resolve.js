import axios from 'axios';
import {uiStartLoading, uiStopLoading} from './transaction';
import {setError} from './error';
import {config} from '../config/config';

export const setReceiver = (receiver) => {
  return {
    type: 'SET_RECEIVER',
    receiver
  };
};

export const resolveReceiver = (data, _function) => {
  return async(dispatch) => {
  	dispatch(uiStartLoading('resolve'));
    let result;
    try{
      if(data[0] === 'G'){
        result = await axios(`${config.baseUrl}/address/${data}`);
      }
      else{
        result = await axios(`${config.baseUrl}/number/${data}`);
      }
  	 	dispatch(setReceiver(result.data));
  	 	dispatch(uiStopLoading('resolve'));
      _function();
     } catch(e){
      if(!e.response){
        dispatch(setError('Network Error', 'Please check your internet connection.'))
      }
      else{
        dispatch(setError('Payment Error', `Could not find wallet linked to ${data}`));
      }
      dispatch(uiStopLoading('resolve'));
     }    	
  };
};