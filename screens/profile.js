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
      <ProfileView {...this.props.account} {...this.props.user} />
    );  
  }

}  
  
const mapStateToProps = (state) => {
	return{
    account: state.account,
    user: state.user
	}
};  

export default connect(mapStateToProps)(ProfileScreen);

