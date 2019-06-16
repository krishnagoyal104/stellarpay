import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ActivityIndicator from './activityIndicator';
import Font from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';

class TrustlineView extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      info1: false,
      info2: false
    }
  }

  changeInfo1State = () => {
    this.setState((prevState) => ({
      info1: !prevState.info1,
      info2: false
    }));
  }

  changeInfo2State = () => {
    this.setState((prevState) => ({
      info2: !prevState.info2,
      info1: false
    }));
  }

  render(){

    return( 
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>
            Trustlines are entries that persist in the Stellar ledger. To hold a token,
            a trustline should be create with the issuer of that token.
          </Text>
        </View>
          {this.props.loading ? <ActivityIndicator /> :
          <View style={styles.buttonContainer}>
            <View style={styles.parentContainer}>
              <TouchableOpacity style={styles.trustButton} onPress={() => this.props.createTrust()}>
                <Font name={'link'} size={20} color={'#007ee5'} />
                <Text style={styles.trustButtonText}>Create Trust with StellarPay</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changeInfo1State()}>
                <Icon name={'info-with-circle'} size={25} color={'#007ee5'} />
              </TouchableOpacity>  
            </View>
            {
              this.state.info1 && 
              <View style={styles.infoContainer}>
                <Text style={[styles.info, {fontSize: 14}]}>Create a trustline with StellarPay to send and receive INR tokens being issued by it.</Text>
              </View>
            }
            <View style={styles.parentContainer}>  
              <View style={styles.trustButton} onPress={() => this.props.createTrust()}>
                <Font name={'link'} size={20} color={'#007ee5'} />
                <Text style={styles.trustButtonText}>Create Trust with an Anchor</Text>
              </View>
              <TouchableOpacity onPress={() => this.changeInfo2State()}>
                <Icon name={'info-with-circle'} size={25} color={'#007ee5'} />
              </TouchableOpacity>  
            </View>
            {
              this.state.info2 && 
              <View style={styles.infoContainer}>
                <Text style={[styles.info, {fontSize: 14}]}>Create a trustline with custom issuer to send and receive tokens being issued by it.</Text>
              </View>
            }
          </View>
        }
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    height: '70%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infoContainer: {
    width: '90%',
    padding: 12,
    borderWidth: 0.2,
    borderRadius: 12
  },
  info: {
    textAlign: 'center',
    fontSize: 18
  },
  parentContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonContainer: {
    height: '60%',
    width: '95%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  trustButton: {
    height: 50,
    width: '90%',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 1,
    backgroundColor: 'white'
  },
  trustButtonText: {
    color: 'black',
    fontSize: 20
  }
});



export default TrustlineView;