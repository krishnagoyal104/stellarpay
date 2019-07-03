import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome';
import Font5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AboutView = (props) => {
  return(
  	<View style={styles.mainContainer}>
  		<View style={styles.topContainer}>
	  		<Text style={styles.text1}>
	  			StellarPay empowers users to send payments across the globe
	  			and is powered by the Stellar Blockchain.
	  		</Text>
	  	</View>
  		<View>
  			<Text style={styles.text2}>Features:</Text>
  			<View style={styles.itemContainer}>
  				<View style={styles.iconContainer}>
  					<Icon name={'clock-fast'} size={20} color={'#007ee5'} />
  				</View>
          <View style={styles.textContainer}>
  				  <Text style={styles.text3}>Near instant transactions</Text>
          </View>  
  			</View>
  			<View style={styles.itemContainer}>
  				<View style={styles.iconContainer}>
  					<Entypo name={'lock'} size={20} color={'#007ee5'} />
  				</View>
          <View style={styles.textContainer}>
  				  <Text style={styles.text3}>Private keys are stored in the keystore and never leave your phone.</Text>
          </View>
  			</View>
  			<View style={styles.itemContainer}>
  				<View style={styles.iconContainer}>
  					<Font5 name={'link'} size={20} color={'#007ee5'} />
  				</View>	
          <View style={styles.textContainer}>
  				  <Text style={styles.text3}>Create trustline with Anchors.</Text>
          </View>  
  			</View>
  			<View style={styles.itemContainer}>
  				<View style={styles.iconContainer}>
  					<Font5 name={'dollar-sign'} size={20} color={'#007ee5'} />
  				</View>
          <View style={styles.textContainer}>
  				  <Text style={styles.text3}>Send and receive assets issued on the Stellar Blockchain.</Text>
          </View>  
  			</View>
        <View style={styles.itemContainer}>
          <View style={styles.iconContainer}>
            <Font name={'rupee'} size={20} color={'#007ee5'} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text3}>Make payments in INR which is a stable coin issued by StellarPay.</Text>
          </View>  
        </View>
  			<View style={styles.itemContainer}>
  				<View style={styles.iconContainer}>
  					<Ionicon name={'ios-notifications'} size={20} color={'#007ee5'} />
  				</View>
          <View style={styles.textContainer}>
  				  <Text style={styles.text3}>Receive push notifications on payments received.</Text>
          </View>  
  			</View>
  			<View style={styles.itemContainer}>
  				<View style={styles.iconContainer}>
  					<Ionicon name={'md-download'} size={20} color={'#007ee5'} />
  				</View>
          <View style={styles.textContainer}>
  				  <Text style={styles.text3}>Import existing account or create a new account with personal keys.</Text>
          </View>  
  			</View>	
  		</View>
  		<View>
				<Text style={styles.text2}>Note:</Text>
				<Text style={styles.text3}>StellarPay is currently on the testnet.</Text>
				<Text style={styles.text3}>This is not an official wallet by the Stellar Foundation.</Text>
  		</View>
  	</View>
  );	 	
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
    padding: 12,
    justifyContent: 'space-around'
	},
	text1: {
		textAlign: 'center',
		fontSize: 18,
		color: 'black'
	},
  text2: {
    paddingBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  text3: {
    paddingBottom: 8,
    fontSize: 16,
    color: 'black'
  },
	itemContainer: {
		flexDirection: 'row',
    alignItems: 'center'
	},
	iconContainer: {
		height: 30,
		width: '10%'
	},
  textContainer: {
    width: '90%'
  }
});

export default AboutView;