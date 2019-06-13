import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import DepositView from '../components/deposit';
import {createTrustline, creditAccount} from '../actions/creditAccount';

class DepositScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      status: ''
    }
  }

  creditUserAccount = async(_amount) => {
    try{
      const result = await this.props.dispatch(creditAccount(_amount));
      this.setState(({
        status: result
      }));
    }
    catch(e){
      this.setState(({
        status: e
      }));
    }
  }

  createTrust = () => {
    this.props.dispatch(createTrustline());
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

