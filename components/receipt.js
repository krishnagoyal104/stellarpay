import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Entypo';

const ReceiptView = (props) => {
  return(	
  	<View style={styles.mainContainer}>
  		<View>
  			<View style={styles.container}>
  				<Text style={styles.font1}>Paid Successfully</Text>
  				<LottieView style={styles.animation} source={require('../static/tick.json')} autoPlay loop />
  			</View>
  			<Text style={styles.font1}>{props.amount} {props.code || 'Lumens'}</Text>
  		</View>
  		<View>
  			<Text style={styles.font2}>{props.recipient.name.toUpperCase()}'s wallet linked to</Text>
  			<Text style={styles.font1}>{props.recipient.number}</Text>
  		</View>
  		<View>
  			<Text style={styles.font2}>{moment().format('LLL')}</Text>
  			<Text style={styles.font2}>Transaction Id:</Text>
  			<Text style={styles.font2} numberOfLines={1} ellipsizeMode={'tail'} selectable={true}>{props.id}</Text>
  		</View>
  		<TouchableOpacity style={styles.navigateButton} onPress={() => props.navigate()}>
					<Icon name={'home'} size={20} color={'#007ee5'} style={{paddingTop: 4, paddingRight: 6}} />
					<Text style={styles.home}>Home</Text>
			</TouchableOpacity>
		</View>		
  );	 	
}

const styles = StyleSheet.create({
	mainContainer: {
		height: '80%',
		paddingLeft: 25,
		paddingRight: 25,
		justifyContent: 'space-around',
	},
	font1: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'black'
	},
	font2: {
		fontSize: 16,
		color: 'black'
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	animation: {
		height: 70,
		width: 70,
	},
	navigateButton: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignSelf: 'center'
	},
	home: {
		color: 'black',
		fontSize: 20
	}
});

export default ReceiptView;