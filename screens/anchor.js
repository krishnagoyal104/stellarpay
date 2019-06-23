import React from 'react';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import AnchorView from '../components/anchor';
import {createTrustWithAnchor} from '../actions/anchor';

class AnchorScreen extends React.Component {

  constructor(props){
    super(props);
  }

  createTrust = (url, code, limit) => {
  	this.props.dispatch(createTrustWithAnchor(this.goToReceiptScreen, url, code, limit));
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

  render() {

    return (
      <AnchorView createTrust={this.createTrust} loading={this.props.loading} navigate={this.goToReceiptScreen} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    loading: state.ui.credit
  }
};

export default connect(mapStateToProps)(AnchorScreen);