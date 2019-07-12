import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';  
import PaymentView from '../components/payment';
import {resolveReceiver} from '../actions/resolve';

class PaymentScreen extends React.Component {

  static options(){
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

  goToConfirmPaymentScreen = (address) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.ConfirmPaymentScreen',
        passProps: {
          address
        },
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
      <PaymentView loading={this.props.ui} recents={this.props.recents}
      resolve={(data) => this.props.dispatch(resolveReceiver(data, this.goToConfirmPaymentScreen))}
      navigate={this.goToConfirmPaymentScreen}
      />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    ui: state.ui.resolve,
    recents: state.recents
  }
};
  
export default connect(mapStateToProps)(PaymentScreen);
