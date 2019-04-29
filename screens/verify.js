import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import VerificationView from '../components/verify';
import {confirmOtp} from '../actions/firebase';

class VerificationScreen extends React.Component {

  constructor(props){
    super(props);
  }

  onSubmit = (code) => {
  	this.props.dispatch(confirmOtp(code, this.props.firebase));
  }

  render() {

    return (
      <VerificationView onSubmit={this.onSubmit} loading={this.props.loading} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    loading: state.ui
  };
};
  
export default connect(mapStateToProps)(VerificationScreen);

