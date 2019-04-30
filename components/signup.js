import React from 'react';
import {View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity, ActivityIndicator, Dimensions} from 'react-native';
import {signUp} from '../actions/resolve';
import Font from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';
//import Ant from 'react-native-vector-icons/AntDesign';

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
		 		<View style={styles.box}>
			 		<View style={styles.topContainer}>
			 			<Text style={styles.title}>Sign Up</Text>
			 		</View>
				 	<View style={styles.container}>
					 	<View style={styles.inputContainer}>
					 		<Icon name={"user"} size={25} />
					 		<TextInput style={styles.input} placeholder="Enter Name" onChangeText={this.onNameChange}/>
					 	</View>
					 	<View style={styles.inputContainer}>	
					 		<Icon name={"phone"} size={25} />
					 		<TextInput style={styles.input} placeholder="Enter Number" onChangeText={this.onNumberChange}
					 		keyboardType="numeric"/>
					 	</View>
				 	</View>
			 		<TouchableOpacity style={styles.signupContainer} onPress={() => this.onSignUp()} >
		  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
							<Text style={styles.bottomText}>Sign Up</Text>
							{this.props.loading ? <ActivityIndicator size="small" color="white" /> : <Font name={'send'} size={20} color={'white'} style={{paddingTop: 4, paddingLeft: 6}} />}
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
		flex: 1,
		backgroundColor: '#E3E9ED'
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
		width: '80%',
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
		width: '80%',
		borderWidth: 1,
		borderColor: '#E3E9ED',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingLeft: 10,
		borderRadius: 12,
		backgroundColor: 'white',
	},
	input: {
		height: 50,
		fontSize: 20,
		borderColor: 'white',
		paddingLeft: 10
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