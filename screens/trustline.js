import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import TrustlineView from '../components/trustline';
import {createTrustline} from '../actions/creditAccount';

class TrustlineScreen extends React.Component {

  constructor(props){
    super(props);
  }

  createTrust = (_function) => {
    this.props.dispatch(createTrustline(this.goToReceiptScreen, _function));
  }

  goToReceiptScreen = (amount, id, status) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.ReceiptScreen',
        passProps: {
          amount,
          id,
          status
        },
        options: {
          topBar: {
            title: {
              text: 'Receipt',
              alignment: 'center'
            }
          },
          bottomTabs: {
            visible: false,
            drawBehind: true
          }
        }
      },                                                
    });
  }

  goToAnchorScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.AnchorScreen',
        options: {
          topBar: {
            title: {
              text: 'Create Trust with Anchor',
              alignment: 'center'
            }
          },
          bottomTabs: {
            visible: false,
            drawBehind: true
          }
        }
      },                                                
    });
  }

  render() {

    return (
      <TrustlineView loading={this.props.loading} createTrust={this.createTrust} navigate={this.goToAnchorScreen} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    loading: state.ui.credit
  }
};    

export default connect(mapStateToProps)(TrustlineScreen);
