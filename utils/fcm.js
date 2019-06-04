import firebase from 'react-native-firebase';

const getToken = () => {
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

const createNotificationListeners = async() => {
  
  const notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;
  });

   const notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
  });
}

module.exports = {createNotificationListeners, getToken};