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
	 	const result = await axios(`http://localhost:3000/${number}`);
	 	dispatch(setReceiver(result));
	 	dispatch(uiStopLoading());
    _function();
     } catch(e){
     	console.log('Error while resolving...');
     	dispatch(uiStopLoading());
     }    	
  };
};