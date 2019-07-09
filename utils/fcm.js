import firebase from 'react-native-firebase';
import {Navigation} from 'react-native-navigation';
import {getLedger} from '../actions/ledger';
import {getBalance} from '../actions/balance';

export const getToken = () => {
  const promise = new Promise(async(resolve, reject) => {
    try{
      const fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        resolve(fcmToken);
      }
      reject('Token not found.');
    }
    catch(e){
      reject(e);
    }
  });
  return promise;
}

export const createNotificationListeners = async(_dispatch, _token) => {
  
  const notificationListener = firebase.notifications().onNotification((notification) => {
    const { title, body } = notification;
  });

  const notificationOpen = await firebase.notifications().getInitialNotification();
  if (notificationOpen) {
    Navigation.mergeOptions('Home', {
      bottomTabs: {
        currentTabIndex: 2
      }
    });
    _token ? _dispatch(getLedger(_token, 'asc')) : _dispatch(getLedger());
    _dispatch(getBalance());
  }

  return notificationListener;
}