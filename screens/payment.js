import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';   
import PaymentView from '../components/payment';
import {fetchKeypair} from '../actions/account';

class PaymentScreen extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
  	this.props.dispatch(fetchKeypair());
  }

  render() {

    return (
      <PaymentView />
    );  
  }

}  
  
export default connect()(PaymentScreen);
