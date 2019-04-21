import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

const ReceiptView = (props) => {
  return(	
  	<View style={styles.container}>
  		<Text style={styles.amount}>{props.amount} Lumens</Text>
  		<Image source={require('../static/stellar.png')} style={styles.image} />
  		<View style={styles.bottomContainer}>
	  		<Text style={{fontSize: 16}}>Sent successfully to</Text>
	  		<Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.name}</Text>
  		</View>
  		<TouchableOpacity style={styles.loginContainer} onPress={props.navigate} >
  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
  				<Icon name={'home'} size={20} color={'white'} style={{paddingTop: 4, paddingRight: 6}} />
					<Text style={styles.login}>Home</Text>
				</View>
			</TouchableOpacity>
		</View>		
  );	 	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	amount: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'green'
	},
	image: {
		height: '30%',
		width: '30%'
	},
	bottomContainer: {
		alignItems: 'center'
	},
	loginContainer: {
		height: 40,
		width: '85%',
		marginTop: 6,
		backgroundColor: '#007ee5',
		alignItems: 'center',
		justifyContent: 'center'
	},
	login: {
		color: 'white',
		fontSize: 20
	}
});

export default ReceiptView;