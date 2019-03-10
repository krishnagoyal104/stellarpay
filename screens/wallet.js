import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';   
import WalletView from '../components/wallet';
import {getBalance} from '../actions/balance';

class WalletScreen extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
  	this.props.dispatch(getBalance());
  }

  render() {

    return (
      <WalletView balances={this.props.balances} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    balances: state.balances
  };
};  
  
export default connect(mapStateToProps)(WalletScreen);

