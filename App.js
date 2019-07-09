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
import WelcomeBackScreen from './screens/welcomeBack';
import ProfileScreen from './screens/profile';
import DepositScreen from './screens/deposit';
import TrustlineScreen from './screens/trustline';
import AboutScreen from './screens/about';
import AnchorScreen from './screens/anchor';
import AssetInfoScreen from './screens/assetInfo';
import configureStore from './store/configureStore';

import Icon from 'react-native-vector-icons/Entypo'; 
import Font5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

const store = configureStore().store;

Navigation.registerComponentWithRedux('stellarPay.HomeScreen', () => HomeScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.PaymentScreen', () => PaymentScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.WalletScreen', () => WalletScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.PassbookScreen', () => PassbookScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.ConfirmPaymentScreen', () => ConfirmPaymentScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.VerificationScreen', () => VerificationScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.SignupScreen', () => SignupScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.ImportAccountScreen', () => ImportAccountScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.ProfileScreen', () => ProfileScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.SideDrawerScreen', () => SideDrawerScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.DepositScreen', () => DepositScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.TrustlineScreen', () => TrustlineScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.AnchorScreen', () => AnchorScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.AssetInfoScreen', () => AssetInfoScreen, Provider, store);
Navigation.registerComponentWithRedux('stellarPay.InitializeScreen', () => InitializeScreen, Provider, store);
Navigation.registerComponent('stellarPay.ReceiveScreen', () => ReceiveScreen);
Navigation.registerComponent('stellarPay.ReceiptScreen', () => ReceiptScreen);
Navigation.registerComponent('stellarPay.SliderScreen', () => SliderScreen);
Navigation.registerComponent('stellarPay.WelcomeScreen', () => WelcomeScreen);
Navigation.registerComponent('stellarPay.WelcomeBackScreen', () => WelcomeBackScreen);
Navigation.registerComponent('stellarPay.AboutScreen', () => AboutScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'stellarPay.InitializeScreen'
      }
    }
  });
});

export const goToIntroScreens = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'stellarPay.SliderScreen',
        options: {
          topBar: {
            visible: false,
            drawBehind: true
          }
        }
      }
    }
  });
}    

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
                  background: {
                    color: '#007ee5'
                  }
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
    Feather.getImageSource('menu', 25, 'white')
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
                              leftButtons: [
                                {
                                  icon: sources[0]
                                }
                              ],
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
                        icon: require('./static/home.png'),
                        iconColor: '#007ee5',
                        selectedIconColor: '#99D3EC'
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
                            },
                            sideMenu: {
                              left: {
                                visible: false,
                                enabled: false
                              }
                            }
                          }
                        }
                      }  
                    ],
                    options: {
                      bottomTab: {
                        icon: require('./static/wallet.png'),
                        iconColor: '#007ee5',
                        selectedIconColor: '#99D3EC'
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
                            },
                            sideMenu: {
                              left: {
                                visible: false,
                                enabled: false
                              }
                            }
                          }
                        }
                      }  
                    ],
                    options: {
                      bottomTab: {
                        icon: require('./static/passbook.png'),
                        iconColor: '#007ee5',
                        selectedIconColor: '#99D3EC'
                      }
                    }
                  }
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'stellarPay.ProfileScreen',
                          options: {
                            topBar: {
                              background: {
                                color: '#007ee5'
                              },
                              title: {
                                text: 'Profile',
                                alignment: 'center',
                                color: 'white'
                              }
                            },
                            sideMenu: {
                              left: {
                                visible: false,
                                enabled: false
                              }
                            }
                          }
                        }
                      }  
                    ],
                    options: {
                      bottomTab: {
                        icon: require('./static/profile.png'),
                        iconColor: '#007ee5',
                        selectedIconColor: '#99D3EC'
                      }
                    }
                  }
                }
              ],
              options: {
                bottomTabs: {
                  titleDisplayMode: 'alwaysHide'
                }
              }
            }
          },
          options: {
            sideMenu: {
              left: {
                visible: false,
                enabled: false,
                width: 250
              }
            }
          }
        }
      }
    });
  });  
};
