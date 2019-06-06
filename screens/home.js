import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';   
import HomePage from '../components/home';
import {fetchKeypair} from '../actions/account';
import {getUser} from '../actions/user';
import {getBalance, getStreamForAccount} from '../actions/balance';
import {createNotificationListeners} from '../utils/fcm';

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  async componentDidMount(){
    await this.props.dispatch(fetchKeypair());
    this.props.dispatch(getUser());
    this.props.dispatch(getBalance());
    this.props.dispatch(getStreamForAccount());
    createNotificationListeners();
  }  

  goToReceiveScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.ReceiveScreen',       
        passProps:{
          publicKey: this.props.account
        }
      }                                                    
    });
  }

  goToPaymentScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.PaymentScreen',
        options: {
          bottomTabs: {
            visible: false,
            drawBehind: true
          }
        }
      }                                                  
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
    account: state.account.publicKey
	}
};  

export default connect(mapStateToProps)(HomeScreen);

