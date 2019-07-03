import React from 'react';
import {View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity, ActivityIndicator, Dimensions} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Feather';
import PhoneInput from 'react-native-phone-input';
import { Formik } from 'formik';
import * as yup from 'yup';
import ButtonView from './button';

class SignupView extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			color1: '#C7C7CD',
			color2: '#C7C7CD'
		}
	}

	onSignUp = (values) => {
		let {name, number, code} = values;
		number = code + number;
		this.props.onSubmit({name, number}); 
	}

	render(){
		return(	
		 	<View style={styles.mainContainer}>
		 		<Formik
		    initialValues={{name: '', code: '+91', number: ''}}
		    onSubmit={values => this.onSignUp(values)}
		    validationSchema={yup.object().shape({
	        name: yup
	        	.string()
	        	.min(3)
	          .required(),
	        code: yup
	        	.string()
	        	.min(2)
	        	.required(),  
	        number: yup
	          .number()
	          .required()
	      })}
			  >
			  	{props => (
					 	<View style={styles.container}>
						 	<View style={[styles.inputContainer1, {borderColor: this.state.color1}]}>
						 		<Icon name={"user"} size={25} />
						 		<TextInput style={styles.input1}
						 		placeholder="Enter Name" onChangeText={props.handleChange('name')}
						 		selectionColor={"#007ee5"}
						 		onFocus={() => this.setState({color1: '#007ee5'})}
								onBlur={() => this.setState({color1: '#C7C7CD'})}
						 		/>
						 	</View>
						 	<View style={styles.inputContainer2}>	
						 		<PhoneInput ref='phone' value={props.values.code} textStyle={{fontSize: 20}}
						 		textProps={{selectionColor: '#007ee5', maxLength: 4}}
						 		style={[styles.code, {borderColor: this.state.color2}]}
						 		onChangePhoneNumber={props.handleChange('code')} />
						 		<TextInput style={[styles.input2, {borderColor: this.state.color2}]}
						 		placeholder={"Enter number"}
						 		onChangeText={props.handleChange('number')}
						 		selectionColor={"#007ee5"}
						 		onFocus={() => this.setState({color2: '#007ee5'})}
								onBlur={() => this.setState({color2: '#C7C7CD'})}
						 		keyboardType="numeric"/>
						 	</View>
						 	{props.touched.name && (props.errors.name || props.errors.code || props.errors.number) && 
            		<Text style={styles.error}>{props.errors.name || props.errors.code || props.errors.number}</Text>
            	}
					 		{this.props.loading ? <ActivityIndicator size="small" color="#007ee5" />:
					 		<ButtonView name={'Sign up'} handler={props.handleSubmit} />
					 		}
					 	</View>
					)} 	
		 		</Formik>
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
		borderBottomWidth: 2
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
		paddingLeft: 10,
		marginLeft: 5
	},
	code: {
		height: 50,
		width: '25%',
		borderBottomWidth: 2,
		fontSize: 20
	},
	input2: {
		height: 50,
		width: '100%',
		paddingTop: 5,
		marginLeft: 5,
		borderBottomWidth: 2,
		fontSize: 20
	},
	error: {
		fontSize: 16,
		color: 'red'
	}
});



export default SignupView;