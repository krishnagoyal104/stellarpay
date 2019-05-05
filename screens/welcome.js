import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation'; 
import WelcomeView from '../components/welcome';

class WelcomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  goToSignupScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.SignupScreen',
        options: {
          topBar: {
            title: {
              text: 'Create Account',
              alignment: 'center'
            }
          },
          bottomTabs: {
            visible: false,
            drawBehind: true
          }
        }
      }                                           
    });
  }

  goToImportAccountScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.ImportAccountScreen',
        options: {
          topBar: {
            title: {
              text:'Import Account',
              alignment: 'center'
            }
          },
          bottomTabs: {
            visible: false,
            drawBehind: true
          }
        }
      }                                           
    });
  }

  render() {

    return (
      <WelcomeView navigateToSignupScreen={() => this.goToSignupScreen()}
      navigateToImportScreen={() => this.goToImportAccountScreen()} />
    );  
  }

} 
  
export default WelcomeScreen;

