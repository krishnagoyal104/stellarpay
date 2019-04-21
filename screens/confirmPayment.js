import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ConfirmPaymentView from '../components/confirmPayment';
import {createTransaction} from '../actions/transaction';

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

  goToReceiptScreen = (receiver, amount) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.ReceiptScreen',
        passProps: {
          name: receiver,
          amount: amount
        },
        options: {
          bottomTabs: {
            visible: false,
            drawBehind: true
          }
        }
      },                                                
    });
  }

  render() {

    return (
      <ConfirmPaymentView {...this.props.recipient} loading={this.props.loading}
      pay={(_amount) => this.props.dispatch(
          createTransaction(this.props.recipient.publicKey, _amount,
          () => this.goToReceiptScreen(this.props.recipient.name, _amount))
        )}
      />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    recipient: state.recipient,
    loading: state.ui
  };
};
  
export default connect(mapStateToProps)(ConfirmPaymentScreen);
