import React from 'react';
import {View, StyleSheet} from 'react-native';   
import SideDrawerView from '../components/sideDrawer';

class SideDrawerScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <SideDrawerView />
    );  
  }

}  
  
export default SideDrawerScreen;

