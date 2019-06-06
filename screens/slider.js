import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {goToWelcome} from '../App';

const slides = [
  {
    key: 'screen1',
    title: 'Send payments across the globe.',
    text: 'Send payments across the globe just using a phone number.'
  },
  {
    key: 'screen2',
    title: 'Utilize the power of blockchain',
    text: 'Infrastructure based on the Stellar Blockchain.'
  },
  {
    key: 'screen3',
    title: 'Secure',
    text: 'Your private keys never leave your phone.'
  }
];

export default class App extends React.Component {
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }

  _renderPrevButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-back"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  }

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );  
  }

  _renderItem = (props) => {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.containerTop}>
        </View>
        <View style={styles.containerBottom}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.description}>{props.text}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        activeDotStyle={{backgroundColor: '#007ee5'}}
        showPrevButton={true}
        renderItem={this._renderItem}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        renderPrevButton={this._renderPrevButton}
        onDone={() => goToWelcome()}      
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerTop: {
    flex: 1
  },
  containerBottom: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: 'black'
  },
  description: {
    fontSize: 16,
    color: 'black'
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});