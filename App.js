import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Network, Server} from 'stellar-sdk';
import {Keypair} from '@pigzbe/react-native-stellar-sdk';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
  } 

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to StellarPay</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default App;
