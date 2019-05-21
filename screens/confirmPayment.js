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

  goToReceiptScreen = (recipient, amount, code, id) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.ReceiptScreen',
        passProps: {
          recipient,
          amount,
          code,
          id
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
      assets={this.props.assets}
      pay={(_amount, _code, _issuer) => this.props.dispatch(
          createTransaction(this.props.recipient.publicKey, _amount,
          (_id) => this.goToReceiptScreen(this.props.recipient, _amount, _code, _id), _code, _issuer)
        )}
      />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    recipient: state.recipient,
    loading: state.ui,
    assets: state.balances
  };
};
  
export default connect(mapStateToProps)(ConfirmPaymentScreen);
