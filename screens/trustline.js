import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import TrustlineView from '../components/trustline';
import {createTrustline} from '../actions/creditAccount';

class TrustlineScreen extends React.Component {

  constructor(props){
    super(props);
  }

  createTrust = () => {
    this.props.dispatch(createTrustline());
  }

  render() {

    return (
      <TrustlineView loading={this.props.loading} createTrust={this.createTrust} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    loading: state.ui.credit
  }
};    

export default connect(mapStateToProps)(TrustlineScreen);
