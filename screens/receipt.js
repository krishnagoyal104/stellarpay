import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import ReceiptView from '../components/receipt';

class ReceiptScreen extends React.Component {

  constructor(props){
    super(props);
  }

  goToRoot = () => {
  	Navigation.popToRoot(this.props.componentId);
  }
  	
  render() {

    return (
      <ReceiptView {...this.props} navigate={() => this.goToRoot()} />
    );  
  }

}  
  
export default ReceiptScreen;

