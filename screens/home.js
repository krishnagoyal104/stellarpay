import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';   
import HomePage from '../components/home';
import {createNotificationListeners} from '../utils/fcm';

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    Navigation.events().bindComponent(this);
  }

  async componentDidMount(){
    createNotificationListeners();
  }

  toggleSideDrawer = () => {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true
        }
      }
    });
  }

  navigationButtonPressed({buttonId}){
    this.toggleSideDrawer();
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

