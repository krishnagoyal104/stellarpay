import React from 'react';
import {Navigation} from 'react-native-navigation';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import HomeScreen from './screens/home';
import PaymentScreen from './screens/payment';
import WalletScreen from './screens/wallet';
import PassbookScreen from './screens/passbook';
import SideDrawerScreen from './screens/sideDrawer';
import ReceiveScreen from './screens/receive';
import configureStore from './store/configureStore';

import Icon from 'react-native-vector-icons/Entypo'; 
import Font from 'react-native-vector-icons/FontAwesome';

const store = configureStore();

Navigation.registerComponentWithRedux('stellarPay.HomeScreen', () => HomeScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.PaymentScreen', () => PaymentScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.WalletScreen', () => WalletScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.PassbookScreen', () => PassbookScreen, Provider, store);
Navigation.registerComponent('stellarPay.SideDrawerScreen', () => SideDrawerScreen);
Navigation.registerComponent('stellarPay.ReceiveScreen', () => ReceiveScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Promise.all([
    Icon.getImageSource('home', 25, '#007ee5'),
    Font.getImageSource('rupee', 25, '#007ee5'),
    Icon.getImageSource('wallet', 25, '#007ee5')
  ]).then((sources) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: 'stellarPay.SideDrawerScreen'
            }
          },
          center: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'stellarPay.HomeScreen',
                        options: {
                          topBar: {
                            background: {
                                color: '#007ee5'
                            },
                            title: {
                              text: 'StellarPay',
                              color: 'white'
                            }
                          }
                        }
                      }
                    }  
                  ],
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Home',
                    icon: sources[0]
                  }
                }
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'stellarPay.PaymentScreen',
                      options: {
                        topBar: {
                          background: {
                              color: '#007ee5'
                          },
                          title: {
                            text: 'Pay',
                            alignment: 'center',
                            color: 'white'
                          }
                        }
                      }
                    }
                  }  
                ],
                options: {
                  bottomTab: {
                    fontSize: 12,
                    text: 'Pay',
                    icon: sources[1]
                  }
                }
              }
            },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'stellarPay.WalletScreen',
                        options: {
                          topBar: {
                            background: {
                                color: '#007ee5'
                            },
                            title: {
                              text: 'Wallet',
                              alignment: 'center',
                              color: 'white'
                            }
                          }
                        }
                      }
                    }  
                  ],
                  options: {
                    bottomTab: {
                      fontSize: 12,
                      text: 'Wallet',
                      icon: sources[2]
                    }
                  }
                }
              }
            ],
          }
      }
    }
      }
    });
  });  
});



