import axios from 'axios';
import {uiStartLoading, uiStopLoading} from './transaction';
import {setError} from './error';

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
  	 	dispatch(setReceiver(result.data));
  	 	dispatch(uiStopLoading());
      _function();
     } catch(e){
     	console.log('Error while resolving...', e);
     	dispatch(uiStopLoading());
      dispatch(setError('payment', `Could not find wallet linked to ${number}`));
     }    	
  };
};