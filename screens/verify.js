import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import VerificationView from '../components/verify';
import {requestOtp, confirmOtp} from '../actions/firebase';

class VerificationScreen extends React.Component {

  constructor(props){
    super(props);
  }

  onSubmit = (code) => {
  	this.props.dispatch(confirmOtp(code, this.props.firebase, this.props.data));
  }

  resendOtp = () => {
    this.props.dispatch(requestOtp(this.props.data));
  }

  render() {

    return (
      <VerificationView onSubmit={this.onSubmit} loading={this.props.loading} resendOtp={this.resendOtp} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    loading: state.ui.user
  };
};
  
export default connect(mapStateToProps)(VerificationScreen);

