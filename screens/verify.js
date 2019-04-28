import React from 'react';
import {View, Text} from 'react-native';
import VerificationView from '../components/verify';

class VerificationScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <VerificationView />
    );  
  }

}  
  
export default VerificationScreen;

