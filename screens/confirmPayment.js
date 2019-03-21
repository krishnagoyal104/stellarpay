import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ConfirmPaymentView from '../components/confirmPayment';

class ConfirmPaymentScreen extends React.Component {

	static options(passProps){
		return{
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

  constructor(props){
    super(props);
  }

  render() {

    return (
      <ConfirmPaymentView />
    );  
  }

}  
  
export default connect()(ConfirmPaymentScreen);
