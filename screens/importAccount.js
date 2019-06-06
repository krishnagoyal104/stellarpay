import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import ImportAccountView from '../components/importAccount';
import {importAccount} from '../actions/import';

class ImportAccountScreen extends React.Component {

  constructor(props){
    super(props);
  }

  importAccount = (key) => {
  	this.props.dispatch(importAccount(key, this.goToWelcomeBackScreen, this.goToSignUpScreen));
  }

  goToWelcomeBackScreen = (name, number) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.WelcomeBackScreen',
        passProps: {
          user: {name, number}
        },
        options: {
          bottomTabs: {
            visible: false,
            drawBehind: true
          }
        }
      }                                           
    });
  }

  goToSignUpScreen = (publicKey, privateKey) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.SignupScreen',
        passProps: {
          publicKey,
          privateKey
        },
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
      <ImportAccountView importAccount={this.importAccount} navigate={this.goToWelcomeBackScreen} loading={this.props.loading} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    loading: state.ui.user
  };
};  

export default connect(mapStateToProps)(ImportAccountScreen);

