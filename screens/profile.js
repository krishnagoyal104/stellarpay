import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ProfileView from '../components/profile';

class ProfileScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <ProfileView {...this.props.account} />
    );  
  }

}  
  
const mapStateToProps = (state) => {
	return{
    account: state.account
	}
};  

export default connect(mapStateToProps)(ProfileScreen);

