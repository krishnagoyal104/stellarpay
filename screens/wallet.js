import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';   
import WalletView from '../components/wallet';

class WalletScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <WalletView />
    );  
  }

}  
  
export default WalletScreen;

