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
      <WelcomeView navigate={this.goToSignupScreen} />
    );  
  }

} 
  
export default WelcomeScreen;

