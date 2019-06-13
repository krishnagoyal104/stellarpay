import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
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
              visible: false,
              enabled: false
            }
          }
        }
      }                                                  
    });
  }

  goToDepositScreen = () => {
    Navigation.push('Home', {
      component: {
        name: 'stellarPay.DepositScreen',
        options: {
          topBar: {
            title: {
              text: 'Add Money',
              alignment: 'center'
            }
          },
          bottomTabs: {
            visible: false,
            drawBehind: true
          },
          sideMenu: {
            left: {
              visible: false,
              enabled: false
            }
          }
        }
      }                                                  
    });
  }

  render() {

    return (
      <SideDrawerView navigateToProfileScreen={this.goToProfileScreen}
      navigateToDepositScreen={this.goToDepositScreen}
      {...this.props.user} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
};
  
export default connect(mapStateToProps)(SideDrawerScreen);

