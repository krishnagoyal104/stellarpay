import React from 'react';
import {View, StyleSheet} from 'react-native'; 
import {Navigation} from 'react-native-navigation';  
import SideDrawerView from '../components/sideDrawer';

class SideDrawerScreen extends React.Component {

  constructor(props){
    super(props);
  }

  goToProfileScreen = () => {
    Navigation.push('Home', {
      component: {
        name: 'stellarPay.ProfileScreen',
        options: {
          topBar: {
          	title: {
          		text: 'Profile',
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
      <SideDrawerView navigate={this.goToProfileScreen} />
    );  
  }

}  
  
export default SideDrawerScreen;

