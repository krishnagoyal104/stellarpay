import axios from 'axios';
import {uiStartLoading, uiStopLoading} from './transaction';

export const setReceiver = (receiver) => {
  return {
    type: 'SET_RECEIVER',
    receiver
  };
};

export const resolveReceiver = (number, _function) => {
  return async(dispatch) => {
  	dispatch(uiStartLoading());
    try{
  	 	const result = await axios(`http://192.168.1.8:3000/${number}`);
      console.log('sfdf', result);
  	 	dispatch(setReceiver(result.data[0]));
  	 	dispatch(uiStopLoading());
      _function();
     } catch(e){
     	console.log('Error while resolving...', e);
     	dispatch(uiStopLoading());
     }    	
  };
};