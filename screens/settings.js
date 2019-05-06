import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import SettingsView from '../components/settings';

class SettingsScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <SettingsView publicKey={this.props.publicKey} privateKey={this.props.privateKey} />
    );  
  }

}  
  
const mapStateToProps = (state) => {
	return{
    account: state.account
	}
};  

export default connect(mapStateToProps)(SettingsScreen);

