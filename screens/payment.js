import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';   
import PaymentView from '../components/payment';

class PaymentScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <PaymentView />
    );  
  }

}  
  
export default PaymentScreen;

