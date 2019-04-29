import React from 'react';
import {View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity, ActivityIndicator} from 'react-native';
import {signUp} from '../actions/resolve';
import Font from 'react-native-vector-icons/FontAwesome';

class SignupView extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			name: '',
			number: null
		}
	}

	onNameChange = (val) => {
		this.setState(({
			name: val
		}))
	}

	onNumberChange = (val) => {
		this.setState(({
			number: val
		}))
	}

	onSignUp = () => {
		this.props.onSubmit(this.state);
	}

	render(){
		return(	
		 	<View style={styles.mainContainer}>
		 		<View style={styles.titleContainer}>
		 			<Text style={styles.title}>Welcome to StellarPay</Text>
		 		</View>
			 	<View style={styles.inputContainer}>
			 		<TextInput style={styles.input} placeholder="Enter Name" onChangeText={this.onNameChange}/>
			 		<TextInput style={styles.input} placeholder="Enter Number" onChangeText={this.onNumberChange}
			 		keyboardType="numeric"/>
			 	</View>
			 	<View style={styles.bottomContainer}>
			 		<TouchableOpacity style={styles.loginContainer} onPress={() => this.onSignUp()} >
			  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
								<Text style={styles.bottomText}>Sign Up</Text>
								{this.props.loading ? <ActivityIndicator size="small" color="#007ee5" /> : <Font name={'send'} size={20} color={'#007ee5'} style={{paddingTop: 4, paddingLeft: 6}} />}
							</View>
					 </TouchableOpacity>
			 	</View>
		 	</View>
  	);
	}

}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#007ee5'
	},
	titleContainer: {
		flex: 4,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		color: 'white',
		fontSize: 30,
		fontFamily: 'serif'
	},
	inputContainer: {
		flex: 2,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	input: {
		backgroundColor: 'white',
		width: '80%',
		height: 50,
		fontSize: 20,
		borderRadius: 25,
		borderColor: 'white',
		paddingLeft: 25
	},
	t: {
		fontSize: 22,
		fontFamily: 'serif'
	},
	bottomContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginContainer: {
		width: '80%',
		height: '35%',
		borderRadius: 25,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	},
	bottomText: {
		color: '#007ee5',
		fontSize: 20
	}
});



export default SignupView;