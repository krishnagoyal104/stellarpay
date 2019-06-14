import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';  
import SideDrawerView from '../components/sideDrawer';

class SideDrawerScreen extends React.Component {

  constructor(props){
    super(props);
  }

  navigate = (name, text) => {
    Navigation.push('Home', {
      component: {
        name: `stellarPay.${name}`,
        options: {
          topBar: {
          	title: {
          		text,
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
      <SideDrawerView {...this.props.user} navigate={this.navigate} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
};
  
export default connect(mapStateToProps)(SideDrawerScreen);

