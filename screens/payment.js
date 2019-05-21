import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';  
import PaymentView from '../components/payment';
import {resolveReceiver} from '../actions/resolve';
import {removeError} from '../actions/error';

class PaymentScreen extends React.Component {

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
    Navigation.events().bindComponent(this);
  }

  componentDidAppear(){
    this.props.dispatch(removeError());
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
      navigate={(_number) => this.props.dispatch(resolveReceiver(_number, this.goToConfirmPaymentScreen))}
      error={this.props.error}
      />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    ui: state.ui,
    error: state.error
  }
};
  
export default connect(mapStateToProps)(PaymentScreen);
