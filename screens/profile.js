import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import TouchID from 'react-native-touch-id';
import ProfileView from '../components/profile';

class ProfileScreen extends React.Component {

  constructor(props){
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      auth: false
    }
  }

  componentDidDisappear(){
    this.setState(({
      auth: false
    }));
  }

  changeAuthState = () => {
    this.setState((prevState) => ({
      auth: !prevState.auth
    }));
  }

  authenticate = async() => {
    try{
      await TouchID.authenticate('Reveal Private Key', {});
      this.changeAuthState();
    }
    catch(e){
      if(['NOT_SUPPORTED', 'NOT_AVAILABLE', 'NOT_PRESENT', 'NOT_ENROLLED'].includes(e.code)){
        Alert.alert('Insecure Keys', 'You have not enabled fingerprint authentication on your device.',
          [{text: 'Ok', onPress: () => this.changeAuthState()}], {cancelable: false});
      }
    }
  } 

  alert = () => {
    this.props.dispatch(setError('Insecure keys', 'You have not enabled fingerprint authentication'));
  }

  render() {

    return (
      <ProfileView auth={this.state.auth} authenticate={this.authenticate} changeAuthState={this.changeAuthState} {...this.props.account} {...this.props.user} {...this.props.error} alert={this.alert} />
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

