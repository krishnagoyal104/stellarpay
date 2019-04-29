import React from 'react';
import {View, StyleSheet, AsyncStorage} from 'react-native';
import InitializeView from '../components/initialize';
import {goToWelcome, goToHome} from '../App';

class InitializeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  async componentDidMount(){
    try{
      const token = await AsyncStorage.getItem('token');
      if(token){
        goToHome();
      }
      else{
        goToWelcome();
      }
    }
    catch(e){
      console.log(e);
    }
  }

  render() {

    return (
      <InitializeView />
    );  
  }

}  
  
export default InitializeScreen;

