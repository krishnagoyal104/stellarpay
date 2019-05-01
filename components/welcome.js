import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import Font from 'react-native-vector-icons/FontAwesome';

const WelcomeView = (props) => {
	return(
		<View style={styles.mainContainer}>
			<View style={styles.topContainer}>
				<LottieView style={styles.animation} source={require('../static/animation.json')} autoPlay loop />
			</View>
			<View style={styles.bottomContainer}>
				<Text style={styles.text}>Welcome To StellarPay</Text>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.signup} onPress={() => props.navigate()} >
						<Text style={styles.signupText}>Sign Up</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.import}>
						<Text style={styles.importText}>Import</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#E3E9ED'
	},
	text: {
		fontSize: 26,
		color: 'black'
	},
	signup: {
		height: '35%',
		width: '75%',
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#007ee5'
	},
	signupText: {
		fontSize: 20,
		color: 'white'
	},
	import: {
		height: '35%',
		width: '75%',
		borderRadius: 12,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},
	importText: {
		fontSize: 20
	},
	buttonContainer: {
		height: '50%',
		width: '100%',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	topContainer: {
		flex: 1
	},
	animation: {
		backgroundColor: '#007ee5'
	},
	bottomContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
	}
});



export default WelcomeView;