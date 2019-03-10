import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import HomeScreen from './screens/home';
import PaymentScreen from './screens/payment';
import WalletScreen from './screens/wallet';
import PassbookScreen from './screens/passbook';
import configureStore from './store/configureStore';

import Icon from 'react-native-vector-icons/Entypo';
import Font from 'react-native-vector-icons/FontAwesome';
import Font5 from 'react-native-vector-icons/FontAwesome5';

const store = configureStore();

Navigation.registerComponent('stellarPay.HomeScreen', () => HomeScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.PaymentScreen', () => PaymentScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.WalletScreen', () => WalletScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.PassbookScreen', () => PassbookScreen, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
  Promise.all([
    Font.getImageSource('rupee', 25, '#007ee5'),
    Icon.getImageSource('wallet', 25, '#007ee5'),
    Font5.getImageSource('clipboard-list', 20, '#007ee5')
  ]).then((sources) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BottomTabsId',
          children: [
            {
              component: {
                name: 'stellarPay.PaymentScreen',
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Pay',
                    icon: sources[0]
                  }
                }
              },
            },
            {
              component: {
                name: 'stellarPay.WalletScreen',
                options: {
                  bottomTab: {
                    text: 'Wallet',
                    fontSize: 12,
                    icon: sources[1]
                  }
                }
              },
            },
            {
              component: {
                name: 'stellarPay.PassbookScreen',
                options: {
                  bottomTab: {
                    text: 'Passbook',
                    fontSize: 12,
                    icon: sources[2]
                  }
                }
              },
            }
          ],
        }
      }
    });
  });  
});



