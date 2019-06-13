import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import DepositView from '../components/deposit';
import {createTrustline, creditAccount} from '../actions/creditAccount';

class DepositScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      status: ''
    }
  }

  creditUserAccount = (_amount) => {
    this.props.dispatch(creditAccount(_amount, this.goToReceiptScreen));
  }

  createTrust = () => {
    this.props.dispatch(createTrustline());
  }

  goToReceiptScreen = (amount, id, status) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.ReceiptScreen',
        passProps: {
          amount,
          id,
          status
        },
        options: {
          topBar: {
            title: {
              text: 'Receipt',
              alignment: 'center'
            }
          },
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
      <DepositView balance={this.props.balance} loading={this.props.loading}
      creditAccount={this.creditUserAccount} status={this.state.status}
      createTrust={this.createTrust} />
    );  
  }

}  
  
const mapStateToProps = (state) => {
	return{
    balance: state.balances.filter((balance) => {
        return balance.asset_code === 'INR';
    }),
    loading: state.ui.credit
	}
};  

export default connect(mapStateToProps)(DepositScreen);

