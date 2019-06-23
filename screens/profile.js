import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ProfileView from '../components/profile';
import {setError} from '../actions/error';

class ProfileScreen extends React.Component {

  constructor(props){
    super(props);
  }

  alert = () => {
    this.props.dispatch(setError('Insecure keys', 'You have not enabled fingerprint authentication'));
  }

  render() {

    return (
      <ProfileView {...this.props.account} {...this.props.user} {...this.props.error} alert={this.alert} />
    );  
  }

}  
  
const mapStateToProps = (state) => {
	return{
    account: state.account,
    user: state.user,
    error: state.error
	}
};  

export default connect(mapStateToProps)(ProfileScreen);

