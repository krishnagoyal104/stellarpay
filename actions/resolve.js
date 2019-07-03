import axios from 'axios';
import {uiStartLoading, uiStopLoading} from './transaction';
import {config} from '../config/config';
import alert from '../utils/alert';

export const setReceiver = (receiver) => {
  return {
    type: 'SET_RECEIVER',
    receiver
  };
};

export const resolveReceiver = (data, _function) => {
  return async(dispatch) => {
  	dispatch(uiStartLoading('resolve'));
    try{
      const result = await axios(`${config.baseUrl}/account/${data}`);
      if(result.data){
        dispatch(setReceiver(result.data));
        _function();
      }
      else{
        alert('Payment Error', `Could not find wallet linked to ${data}`);
      }
      dispatch(uiStopLoading('resolve'));
    }
    catch(e){
      dispatch(uiStopLoading('resolve'));
      if(!e.response){
        alert();
      }
     }    	
  };
};