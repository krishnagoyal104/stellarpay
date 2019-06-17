import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {goToHome} from '../App';
import Icon from 'react-native-vector-icons/AntDesign';

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
			   <TouchableOpacity style={styles.button} onPress={() => goToHome()}>
						<Text style={styles.buttonText}>Proceed</Text>
				 </TouchableOpacity>
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
	},
	button: {
		height: 50,
		width: '85%',
		borderRadius: 8,
		backgroundColor: '#007ee5',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		fontSize: 20,
		color: 'white'
	}
});

export default WelcomeBackView;