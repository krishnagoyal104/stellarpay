import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';  
import SignupView from '../components/signup';
import {fetchKeypair} from '../actions/account';
import {signUp} from '../actions/signup';
import firebase from 'react-native-firebase';

class SignupScreen extends React.Component {

  constructor(props){
    super(props);
  }

  onSubmit = async(data) => {
    await this.props.dispatch(fetchKeypair());
  	this.props.dispatch(signUp(data));
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

