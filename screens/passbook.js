import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';   
import PassbookView from '../components/passbook';

class PassbookScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <PassbookView />
    );  
  }

}  
  
export default PassbookScreen;

