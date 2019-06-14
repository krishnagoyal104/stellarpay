import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ActivityIndicator from './activityIndicator';
import Font from 'react-native-vector-icons/FontAwesome5';

const TrustlineView = (props) => {
  return( 
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Trustlines are entries that persist in the Stellar ledger. To hold an asset,
          a trustline should be create with the issuer of the asset.
        </Text>
      </View>
      {
        props.loading ? <ActivityIndicator /> :
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.trustButton} onPress={() => props.createTrust()}>
            <Font name={'link'} size={20} color={'#007ee5'} style={{paddingTop: 4, paddingRight: 6}} />
            <Text style={styles.trustButtonText}>Create Trust with StellarPay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.trustButton} onPress={() => props.createTrust()}>
            <Font name={'link'} size={20} color={'#007ee5'} style={{paddingTop: 4, paddingRight: 6}} />
            <Text style={styles.trustButtonText}>Create Trust with an Anchor</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '60%',
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black'
  },
  buttonContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  trustButton: {
    height: 50,
    width: '90%',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    backgroundColor: 'white'
  },
  trustButtonText: {
    color: 'black',
    fontSize: 20
  }
});



export default TrustlineView;