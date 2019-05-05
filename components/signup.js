import React from 'react';
import {View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity, ActivityIndicator, Dimensions} from 'react-native';
import {signUp} from '../actions/resolve';
import Icon from 'react-native-vector-icons/Feather';
import CountryPicker from 'react-native-country-picker-modal';

class SignupView extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			name: '',
			number: null,
			cca2: 'US',
			callingCode: '1'
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
		let {name, number, callingCode} = this.state;
		number = '+' + callingCode + number; 
		this.props.onSubmit({name, number});
	}

	render(){
		return(	
		 	<View style={styles.mainContainer}>
		 		<View style={styles.box}>
			 		<View style={styles.topContainer}>
			 			<Text style={styles.title}>Sign Up</Text>
			 		</View>
				 	<View style={styles.container}>
					 	<View style={styles.inputContainer}>
					 		<Icon name={"user"} size={25} />
					 		<TextInput style={styles.input1} placeholder="Enter Name" onChangeText={this.onNameChange}/>
					 	</View>
					 	<View style={styles.inputContainer}>	
					 		<CountryPicker
					 		showCallingCode={true}
					 		closable={true}
					 		filterable={true}
			          onChange={value => {
			            this.setState(({cca2: value.cca2, callingCode: value.callingCode}));
			          }}
			          cca2={this.state.cca2}
			          translation="eng"
        			/>
        			<TextInput style={styles.codeInput} value={'+' + this.state.callingCode} editable={false} />
					 		<TextInput style={styles.input2} onChangeText={this.onNumberChange}
					 		keyboardType="numeric"/>
					 	</View>
				 	</View>
			 		<TouchableOpacity style={styles.signupContainer} onPress={() => this.onSignUp()} >
		  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
							<Text style={styles.bottomText}>Sign Up</Text>
							{this.props.loading && <ActivityIndicator size="small" color="white" />}
						</View>
					 </TouchableOpacity>
			 	</View>
			 	<View style={styles.iconContainer}>
		 			<Icon name={"user"} size={50} color={"black"} />
		 		</View>
		 	</View>
  	);
	}

}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	iconContainer: {
		height: Dimensions.get('window').height * 10/100,
		width: Dimensions.get('window').height * 10/100,
		marginTop: Dimensions.get('window').height * 5/100,
		position: 'absolute',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: Dimensions.get('window').height * 5/100,
		backgroundColor: 'white'
	},
	box: {
		height: '60%',
		width: '90%',
		marginTop: Dimensions.get('window').height * 10/100,
		justifyContent: 'space-around',
		alignSelf: 'center',
		backgroundColor: 'white'
	},
	topContainer: {
		height: '20%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		color: 'black'
	},
	container: {
		height: '40%',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	inputContainer: {
		width: '95%',
		borderWidth: 1,
		borderColor: '#E3E9ED',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingLeft: 10,
		borderRadius: 12
	},
	codeInput: {
		height: 50,
		width: '18%',
		fontSize: 20
	},
	input1: {
		height: 50,
		width: '80%',
		fontSize: 20,
		borderColor: 'white',
		paddingLeft: 10,
	},
	input2: {
		height: 50,
		width: '80%',
		fontSize: 20,
		borderColor: 'white',
	},
	signupContainer: {
		height: '15%',
		width: '80%',
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