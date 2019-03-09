import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';   
import HomePage from '../components/home';

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <HomePage />
    );  
  }

}  
  
export default HomeScreen;

