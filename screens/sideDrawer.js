import React from 'react';
import {View, StyleSheet} from 'react-native'; 
import {Navigation} from 'react-native-navigation';  
import SideDrawerView from '../components/sideDrawer';

class SideDrawerScreen extends React.Component {

  constructor(props){
    super(props);
  }

  goToSettingsScreen = () => {
    Navigation.push('Home', {
      component: {
        name: 'stellarPay.SettingsScreen',
        options: {
          topBar: {
          	title: {
          		text: 'Settings',
          		alignment: 'center'
          	}
          },
          bottomTabs: {
            visible: false,
            drawBehind: true
          },
          sideMenu: {
          	left: {
          		visible: false
          	}
          }
        }
      }                                                  
    });
  }

  render() {

    return (
      <SideDrawerView navigate={this.goToSettingsScreen} />
    );  
  }

}  
  
export default SideDrawerScreen;

