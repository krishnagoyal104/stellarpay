import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';   
import WalletView from '../components/wallet';
import {getBalance, fundUserAccount} from '../actions/balance';

class WalletScreen extends React.Component {

  constructor(props){
    super(props);
  }

  fetchBalance = () => {
    this.props.dispatch(getBalance());
  }

  fundUserAccount = () => {
    this.props.dispatch(fundUserAccount());
  }

  render() {

    return (
      <WalletView balances={this.props.balances} loading={this.props.loading} refresh={this.fetchBalance}
      fundUserAccount={this.fundUserAccount}/>
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    balances: state.balances,
    loading: state.ui.balance
  };
};  
  
export default connect(mapStateToProps)(WalletScreen);

