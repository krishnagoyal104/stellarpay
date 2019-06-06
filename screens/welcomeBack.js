import React from 'react';
import {View, StyleSheet} from 'react-native';
import WelcomeBackView from '../components/welcomeBack';

class WelcomeBackScreen extends React.Component{	

	constructor(props){
		super(props);
	}

  render() {

    return (
      <WelcomeBackView user={this.props.user} />
    );  
  }

}
  
export default WelcomeBackScreen;
