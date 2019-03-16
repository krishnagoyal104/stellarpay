import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';   
import HomePage from '../components/home';
import {fetchKeypair} from '../actions/account';
import {getBalance} from '../actions/balance';

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  async componentWillMount(){
    await this.props.dispatch(fetchKeypair());
    this.props.dispatch(getBalance());
  }


  goToReceiveScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.ReceiveScreen',       
        passProps:{
          publicKey: this.props.account
        }
      },                                                         
    });
  }

  goToPaymentScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.PaymentScreen'
      },                                                         
    });
  }  

  render() {

    return (
      <HomePage navigateToReceive={() => this.goToReceiveScreen()}
      navigateToPayment={() => this.goToPaymentScreen()} />
    );  
  }

}  
  
const mapStateToProps = (state) => {
	return{
		balances: state.balances,
    account: state.account.publicKey
	}
};  

export default connect(mapStateToProps)(HomeScreen);

