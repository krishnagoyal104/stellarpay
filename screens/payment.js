import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';  
import PaymentView from '../components/payment';
import {createTransaction} from '../actions/transaction';

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
  }

  goToConfirmPaymentScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.ConfirmPaymentScreen'
      }                                                  
    });
  }

  render() {

    return (
      <PaymentView loading={this.props.ui}
      pay={(_receiver, _amount) => this.props.dispatch(createTransaction(_receiver, _amount))}
      navigate={() => this.goToConfirmPaymentScreen()}
      />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    ui: state.ui
  }
};
  
export default connect(mapStateToProps)(PaymentScreen);
