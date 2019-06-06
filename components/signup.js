import React from 'react';
import {View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity, ActivityIndicator, Dimensions} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Feather';
import PhoneInput from 'react-native-phone-input'

class SignupView extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			name: '',
			code: '+91',
			number: null
		}
	}

	onNameChange = (val) => {
		this.setState(({
			name: val
		}))
	}

	onCodeChange = (val) => {
		this.setState(({
			code: val
		}))
	}

	onNumberChange = (val) => {
		this.setState(({
			number: val
		}))
	}

	onSignUp = () => {
		let {name, number, code} = this.state;
		number = code + number;
		this.props.onSubmit({name, number});
	}

	render(){
		return(	
		 	<View style={styles.mainContainer}>
			 	<View style={styles.container}>
				 	<View style={styles.inputContainer1}>
				 		<Icon name={"user"} size={25} />
				 		<TextInput style={styles.input1}
				 		placeholder="Enter Name" onChangeText={(val) => this.onNameChange(val)}
				 		selectionColor={"black"}/>
				 	</View>
				 	<View style={styles.inputContainer2}>	
				 		<PhoneInput ref='phone' value={this.state.code} textStyle={{fontSize: 20}} style={styles.code}
				 		onChangePhoneNumber={(val) => this.onCodeChange(val)} />
				 		<TextInput style={styles.input2}
				 		placeholder={"Enter number"}
				 		onChangeText={(val) => this.onNumberChange(val)}
				 		selectionColor={"black"}
				 		keyboardType="numeric"/>
				 	</View>
		 		<TouchableOpacity style={styles.signupContainer} onPress={() => this.onSignUp()} >
	  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
						<Text style={styles.bottomText}>Sign Up</Text>
						{this.props.loading && <ActivityIndicator size="small" color="white" />}
					</View>
				</TouchableOpacity>
		 	</View>
		 	</View>
  	);
	}

}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	container: {
		height: '35%',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	inputContainer1: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		borderBottomWidth: 2,
		borderColor: '#007ee5'
	},
	inputContainer2: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		overflow: 'hidden'
	},
	input1: {
		height: 50,
		width: '100%',
		fontSize: 20,
		marginLeft: 5,
		paddingLeft: 10,
	},
	code: {
		height: 50,
		width: '25%',
		borderBottomWidth: 2,
		borderColor: '#007ee5',
		fontSize: 20
	},
	input2: {
		height: 50,
		width: '100%',
		paddingTop: 5,
		marginLeft: 5,
		borderBottomWidth: 2,
		borderColor: '#007ee5',
		fontSize: 20
	},
	signupContainer: {
		height: 50,
		width: '90%',
		alignSelf: 'center',
		borderRadius: 12,
		backgroundColor: '#007ee5',
		justifyContent: 'center',
		alignItems: 'center'
	},
	bottomText: {
		color: 'white',
		fontSize: 20
	}
});



export default SignupView;