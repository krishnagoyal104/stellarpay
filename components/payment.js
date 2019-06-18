import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, Keyboard, ActivityIndicator} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import Font from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as yup from 'yup';
import ScannerView from './scanner';

class PaymentPage extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			scanner: false
		}

	}

	onScanner = () => {
		this.setState((prevState) => ({
			scanner: !prevState.scanner
		}));
	}

	onSubmit = (values) => {
		Keyboard.dismiss();
		const {code, number} = values;
		this.props.navigate(code + number);
	}

  render(){  
		return(	
			<View style={styles.mainConatiner}>
			<Formik
	    initialValues={{code: '+91', number: ''}}
	    onSubmit={values => this.onSubmit(values)}
	    validationSchema={yup.object().shape({
        code: yup
        	.string()
        	.max(4)
          .required(),
        number: yup
          .number()
          .required()
      })}
		  >
		  	{props => (
				  <View style={styles.containerTop}>
					  <View style={styles.inputContainer}>
					  	<TextInput style={styles.codeInput}
					  	value={props.values.code} selectionColor={'#007ee5'}
				  		onChangeText={props.handleChange('code')}
				  		maxLength={4}
				  		/>
				  		<TextInput style={styles.textInput} value={props.values.number}
				  		placeholder={'Enter mobile number'} selectionColor={'#007ee5'}
				  		onChangeText={props.handleChange('number')}	
				  		autoFocus={true}
				  		keyboardType={"numeric"}
				  		/>
				  	</View>
				  	{props.touched.number && props.errors.number &&
            	<Text style={styles.error}>{props.errors.number}</Text>
            }
				  	{this.props.loading ? <ActivityIndicator size="small" color="#007ee5" /> :
			  		(<TouchableOpacity style={styles.loginContainer} onPress={props.handleSubmit} >
				  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
									<Text style={styles.login}>Proceed</Text>
									<Icon name={'arrowright'} size={20} color={'white'} style={{paddingTop: 4, paddingLeft: 6}} />
								</View>
						 </TouchableOpacity>)
			  		}
			  	</View>
		  	)}
		  </Formik>	
		  	<View style={styles.containerBottom}>
		  		{this.state.scanner ? <ScannerView close={this.onScanner} navigate={(publicKey) => this.props.navigate(publicKey)} /> :
		  			<TouchableOpacity style={styles.scannerContainer} onPress={() => this.onScanner()}>
		  				<Text style={styles.scanText}>Scan QRCode</Text>
		  				<Ionicon name={"md-qr-scanner"} size={20} color={"black"} />
		  			</TouchableOpacity>}
		  	</View>
		  </View>  
	    );
  }		
}

const styles = StyleSheet.create({
	mainConatiner:{
		flex: 1
	},
	containerTop:{
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	containerBottom:{
		flex: 3,
		paddingTop: 25,
		alignItems: 'center'
	},
	codeInput: {
		height: 50,
		width: '15%',
		marginRight: 5,
		borderBottomWidth: 2,
		borderBottomColor: '#007ee5',
		fontSize: 22
	},
	textInput: {
		height: 50,
		width: '75%',
		borderBottomWidth: 2,
		borderBottomColor: '#007ee5',
		fontSize: 22
	},
	inputContainer: {
		width: '100%',
		flexDirection: 'row',
	  justifyContent: 'center',
	},
	image: {
		height: 35,
		width: 35
	},
	loginContainer: {
		height: 40,
		width: '85%',
		marginTop: 6,
		backgroundColor: '#007ee5',
		alignItems: 'center',
		justifyContent: 'center'
	},
	login: {
		color: 'white',
		fontSize: 20
	},
	scannerContainer: {
		flexDirection: 'row'
	},
	scanText: {
		fontSize: 16,
		marginRight: 7,
		color: '#007ee5'
	},
	error: {
		fontSize: 16,
		color: 'red'
	}
});

export default PaymentPage;