import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, StyleSheet} from 'react-native';
import HomeScreen from './screens/home';

Navigation.registerComponent('stellarPay.HomeScreen', () => HomeScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'stellarPay.HomeScreen'
      }
    }
  });
});