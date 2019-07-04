import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {goToHome} from '../App';
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonView from './button';

const WelcomeBackView = (props) => {
	return(
		 <View style={styles.mainContainer}>
			 <View style={styles.containerTop}>
				 <View style={styles.innerContainer}>
			     <Text style={styles.text}>Welcome back</Text>
			     <Text style={styles.name}>{props.user.name.toUpperCase()}</Text>
				 </View>
				 <View>
				   <Text style={styles.text}>Wallet linked to:</Text>
				   <Text style={styles.number}>{props.user.number}</Text>
			   </View>
			 </View> 
			 <View style={styles.containerBottom}>
			   <ButtonView name={'Proceed'} handler={() => goToHome()} />
			 </View> 
		 </View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	containerTop: {
		flex: 2,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	containerBottom: {
		flex: 1,
		paddingBottom: 16,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	innerContainer: {
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