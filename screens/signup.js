import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation'; 
import SignupView from '../components/signup';
import {requestOtp} from '../actions/firebase';

class SignupScreen extends React.Component {

  constructor(props){
    super(props);
  }

  onSubmit = async(data) => {
    this.props.dispatch(requestOtp(data, this.goToVerificationScreen));
  }

  goToVerificationScreen = (data, firebase) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.VerificationScreen',
        passProps: {
          data,
          firebase
        }
      }                                               
    });
  }

  render() {

    return (
      <SignupView onSubmit={this.onSubmit} loading={this.props.loading} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    loading: state.ui
  };
}; 
  
export default connect(mapStateToProps)(SignupScreen);

