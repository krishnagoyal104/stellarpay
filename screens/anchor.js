import React from 'react';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import AnchorView from '../components/anchor';
import {fetchAssets} from '../actions/anchor';

class AnchorScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      assets: []
    }
  }

  fetchAssetList = async(url) => {
    try{
      const result = await this.props.dispatch(fetchAssets(url));
      this.setState(({
        assets: result
      }));
    }
    catch(e){}
  }

  goToAssetInfo = (index) => {
    const asset = this.state.assets[index];
    Navigation.push(this.props.componentId, {
      component: {
        name: 'stellarPay.AssetInfoScreen',
        passProps: {
          asset
        },
        options: {
          topBar: {
            title: {
              text: asset.name,
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
      <AnchorView assets={this.state.assets} fetchAssets={this.fetchAssetList} loading={this.props.loading} navigate={this.goToAssetInfo} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    loading: state.ui.anchor
  }
};

export default connect(mapStateToProps)(AnchorScreen);