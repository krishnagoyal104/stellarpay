import React from 'react';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import AssetInfoView from '../components/assetInfo';
import {createTrustline} from '../actions/creditAccount';

class AssetInfoScreen extends React.Component {

  constructor(props){
    super(props);
  }

  createTrust = (limit) => {
  	const {issuer, code} = this.props.asset;
    this.props.dispatch(createTrustline(this.goToReceiptScreen, null, issuer, code, limit));
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
      <AssetInfoView asset={this.props.asset} createTrust={this.createTrust}
      loading={this.props.loading} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    loading: state.ui.credit
  }
};

export default connect(mapStateToProps)(AssetInfoScreen);