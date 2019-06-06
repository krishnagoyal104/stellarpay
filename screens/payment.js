import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';  
import PaymentView from '../components/payment';
import {resolveReceiver} from '../actions/resolve';
import {removeError} from '../actions/error';

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

  goToConfirmPaymentScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.ConfirmPaymentScreen',
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
      <PaymentView loading={this.props.ui}
      navigate={(data) => this.props.dispatch(resolveReceiver(data, this.goToConfirmPaymentScreen))}
      error={this.props.error}
      />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    ui: state.ui.resolve,
    error: state.error
  }
};
  
export default connect(mapStateToProps)(PaymentScreen);
