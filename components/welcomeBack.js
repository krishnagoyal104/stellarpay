import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {goToHome} from '../App';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonView from './button';

const WelcomeBackView = (props) => {
	return(
		 <View style={styles.mainContainer}>
			 <View style={styles.containerTop}>
				 <View style={styles.partition1}>
			     <Text style={styles.text}>Welcome back</Text>
			     <Text style={styles.name}>{props.user.name.toUpperCase()}</Text>
				 </View>
				 <View>
				   <Text style={styles.text}>Wallet linked to:</Text>
				   <Text style={styles.number}>{props.user.number}</Text>
			   </View>
			   <ButtonView name={'Proceed'} handler={() => goToHome()} />
			 </View> 
			 <View style={styles.containerBottom}></View> 
		 </View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	containerTop: {
		flex: 2,
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	containerBottom: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	partition1: {
		alignItems: 'center'
	},
	text: {
		fontSize: 26,
		color: 'black'
	},
	name: {
		fontSize: 26,
		fontWeight: 'bold',
		color: 'green'
	},
	number: {
		fontSize: 26,
		fontWeight: 'bold',
		color: 'black'
	}
});

export default WelcomeBackView;