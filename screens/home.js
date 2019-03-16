import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';   
import HomePage from '../components/home';
import {getBalance} from '../actions/balance';

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.dispatch(getBalance());
  }

  render() {

    return (
      <HomePage />
    );  
  }

}  
  
const mapStateToProps = (state) => {
	return{
		balances: state.balances
	}
};  

export default connect(mapStateToProps)(HomeScreen);

