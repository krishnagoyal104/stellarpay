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
import ConfirmPaymentScreen from './screens/confirmPayment';
import ReceiptScreen from './screens/receipt';
import SliderScreen from './screens/slider';
import SignupScreen from './screens/signup';
import InitializeScreen from './screens/initialize';
import VerificationScreen from './screens/verify';
import WelcomeScreen from './screens/welcome';
import ImportAccountScreen from './screens/importAccount';
import ProfileScreen from './screens/profile';
import configureStore from './store/configureStore';

import Icon from 'react-native-vector-icons/Entypo'; 
import Font from 'react-native-vector-icons/FontAwesome';

const store = configureStore();

Navigation.registerComponentWithRedux('stellarPay.HomeScreen', () => HomeScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.PaymentScreen', () => PaymentScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.WalletScreen', () => WalletScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.PassbookScreen', () => PassbookScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.ConfirmPaymentScreen', () => ConfirmPaymentScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.VerificationScreen', () => VerificationScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.SignupScreen', () => SignupScreen, Provider, store);
Navigation.registerComponent('stellarPay.SideDrawerScreen', () => SideDrawerScreen);
Navigation.registerComponent('stellarPay.ReceiveScreen', () => ReceiveScreen);
Navigation.registerComponent('stellarPay.ReceiptScreen', () => ReceiptScreen);
Navigation.registerComponent('stellarPay.SliderScreen', () => SliderScreen);
Navigation.registerComponent('stellarPay.InitializeScreen', () => InitializeScreen);
Navigation.registerComponent('stellarPay.WelcomeScreen', () => WelcomeScreen);
Navigation.registerComponent('stellarPay.ImportAccountScreen', () => ImportAccountScreen);
Navigation.registerComponentWithRedux('stellarPay.ProfileScreen', () => ProfileScreen, Provider, store);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'stellarPay.InitializeScreen'
      }
    }
  });
});

export const goToWelcome = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'stellarPay.WelcomeScreen',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true
                }
              }
            }
          }
        ]
      }
    }
  });
}

export const goToHome = () => {
  Promise.all([
    Icon.getImageSource('home', 25, '#007ee5'),
    Icon.getImageSource('wallet', 25, '#007ee5'),
    Icon.getImageSource('list', 25, '#007ee5')
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
                          id: 'Home',
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
                          name: 'stellarPay.PassbookScreen',
                          options: {
                            topBar: {
                              background: {
                                color: '#007ee5'
                              },
                              title: {
                                text: 'Ledger',
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
                        text: 'Ledger',
                        icon: sources[2]
                      }
                    }
                  }
                }
              ],
            }
          },
          options: {
            sideMenu: {
              left: {
                width: 200
              }
            }
          }
        }
      }
    });
  });  
};
