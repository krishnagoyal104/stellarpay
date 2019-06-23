import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native';
import ActivityIndicator from './activityIndicator';
import Font from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';

class TrustlineView extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      info1: false,
      info2: false,
      showButton: true
    }
  }

  hideButton = () => {
    this.setState(({
      showButton: false
    }));
  }

  async componentWillMount(){
    const result = await AsyncStorage.getItem('trust');
    if(result){
      this.hideButton();
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
          <View style={styles.buttonContainer}>
            {this.props.loading ? <ActivityIndicator /> : this.state.showButton ?
              <View style={styles.parentContainer}>
                <TouchableOpacity style={styles.trustButton} onPress={() => this.props.createTrust(this.hideButton)}>
                  <Font name={'link'} size={20} color={'white'} />
                  <Text style={styles.trustButtonText}>Create Trust with StellarPay</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeInfo1State()}>
                  <Icon name={'info-with-circle'} size={25} color={'#99D3EC'} />
                </TouchableOpacity>  
              </View> :
              <View style={styles.check}>
                <Ionicon name={"ios-checkmark-circle"} size={22} color={"green"} />
                <Text style={styles.text}>Trustline created with StellarPay.</Text>
              </View>  
            }
            <View style={styles.parentContainer}>  
              <TouchableOpacity style={styles.trustButton} onPress={() => this.props.navigate()}>
                <Font name={'link'} size={20} color={'white'} />
                <Text style={styles.trustButtonText}>Create Trust with an Anchor</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.changeInfo2State()}>
                <Icon name={'info-with-circle'} size={25} color={'#99D3EC'} />
              </TouchableOpacity>  
            </View>
          </View>
        <View style={styles.bottomContainer}>
          {this.state.info1 && <View style={styles.box}>
            <Text style={[styles.info, {fontSize: 14}]}>Create a trustline with StellarPay to send and receive INR tokens being issued by it.</Text>
          </View>}
          {this.state.info2 &&
          <View style={styles.box}>  
            <Text style={[styles.info, {fontSize: 14}]}>Create a trustline with custom issuer to send and receive tokens being issued by it.</Text>
          </View>}
        </View>
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '70%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    width: '90%',
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 0.2,
    borderRadius: 12,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 2,
    height: '60%',
    width: '95%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  info: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  parentContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  trustButton: {
    height: 50,
    width: '80%',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#007ee5'
  },
  trustButtonText: {
    color: 'white',
    fontSize: 18
  },
  box: {
    height: 60,
    width: '90%',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderRadius: 12
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center'
  },
  check: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});



export default TrustlineView;