import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, ActivityIndicator, PermissionsAndroid} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import Font from 'react-native-vector-icons/FontAwesome';
import ContactsWrapper from 'react-native-contacts-wrapper';
import Entypo from 'react-native-vector-icons/Entypo';
import { Formik } from 'formik';
import * as yup from 'yup';
import ButtonView from './button';
import ScannerView from './scanner';

class PaymentPage extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			scanner: false,
			mode: false
		}

	}

	onScanner = () => {
		this.setState((prevState) => ({
			scanner: !prevState.scanner
		}));
	}

	onModeChange = () => {
		this.setState((prevState) => ({
			mode: !prevState.mode
		}));
	}

	onSubmit = (value) => {
		Keyboard.dismiss();
		let contact;
		if(typeof value === 'object'){
			const {address, code, number} = value;
			if(address){
				contact = address;
				return this.props.navigate(address);
			}
			else{
				contact = code + number;
			}
		}
		else{
			contact = value;
		}
		this.props.resolve(contact);
	}

	launchContactsApp = async(_function) => {
		try{
			Keyboard.dismiss();
			const result = await PermissionsAndroid.request(
		  PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
			  {
			    'title': 'Contacts',
			    'message': 'StellarPay would like to view your contacts.'
			  }
			);
			if (result === PermissionsAndroid.RESULTS.GRANTED) {
	      const contact = await ContactsWrapper.getContact();
	      const number = contact.phone;
	      if(number.substr(0, 1) === '+'){
	      	this.onSubmit(number);
	      }
	      else{
	      	_function('number', number);
	      }
	    }
		}
		catch(e){
			console.log(e);
		}
	}

	renderRecents = () => {
		const colors = ['#DA4316', '#FBA601', '#99D3EC', '#4744A5', '#FCD1A6'];
		return this.props.recents.map((contact, index) => (
			<TouchableOpacity style={styles.circleContainer} onPress={() => this.onSubmit(contact.number)} key={index}>
				<View style={[styles.circle, {backgroundColor: colors[index]}]}>
					<Text style={styles.initial}>{contact.name.substr(0, 1).toUpperCase()}</Text>
				</View>
				<Text numberOfLines={1} ellipsizeMode={'tail'}>{contact.name}</Text>
			</TouchableOpacity>
		))
	}

  render(){  
		return(	
			<View style={styles.mainConatiner}>
				<Formik
		    initialValues={this.state.mode ? {address: ''} : {code: '+91', number: ''}}
		    onSubmit={values => this.onSubmit(values)}
		    validationSchema={
		    	this.state.mode ?
		    	yup.object().shape({
		        address: yup
		          .string()
		          .required()
		      }) :    
		    	yup.object().shape({
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
					  <View style={[styles.containerTop, {flex: this.state.scanner ? 1 : 2}]}>
						  {this.state.mode ?
						  	<View style={[styles.inputContainer, {alignItems : 'flex-start'}]}>
						  		<Entypo name={'triangle-right'} size={20} color={'#007ee5'} style={{paddingTop: 16}} />
							  	<TextInput style={[styles.textInput, {width: '85%'}]} value={props.values.address}
						  		placeholder={'Enter stellar address'} selectionColor={'#007ee5'} autoFocus={true}
						  		onChangeText={props.handleChange('address')}
						  		/>
						  	</View>	 :
						  	<View style={styles.inputContainer}>
							  	<TextInput style={styles.codeInput}
							  	value={props.values.code} selectionColor={'#007ee5'}
						  		onChangeText={props.handleChange('code')}
						  		maxLength={4}
						  		/>
						  		<TextInput style={styles.textInput} value={props.values.number}
						  		placeholder={'Enter mobile number'} selectionColor={'#007ee5'}
						  		onChangeText={props.handleChange('number')}	
						  		autoFocus={true} keyboardType={"numeric"}
						  		/>
						  		<TouchableOpacity onPress={() => this.launchContactsApp(props.setFieldValue)}>
						  			<Icon name={"contacts"} size={25} color={"#007ee5"} style={styles.icon} />
						  		</TouchableOpacity>
					  		</View>}
					  	{((props.touched.number && props.errors.number) || (props.touched.code && props.errors.code) || (props.touched.address && props.errors.address)) &&
	            	<Text style={styles.error}>{props.errors.number || props.errors.code || props.errors.address}</Text>
	            }
					  	{this.props.loading ? <ActivityIndicator size="small" color="#007ee5" /> :
				  		<ButtonView name={'Proceed'} handler={props.handleSubmit} />
				  		}
				  	</View>
			  	)}
			  </Formik>
		  {!this.state.scanner && 
	  	<View style={styles.containerMiddle}>
	  		{
	  			this.props.recents.length > 0 &&
	  			<View style={styles.innerContainer}>
		  			<Text style={styles.text}>Recents</Text>
			  		<View style={styles.recentsContainer}>
	          	{this.renderRecents()}
	          </View>
        	</View>
      	}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.scannerContainer} onPress={() => this.onScanner()}>
	  				<Text style={styles.scanText}>Scan QRCode</Text>
	  				<Ionicon name={"md-qr-scanner"} size={20} color={"#007ee5"} />
	  			</TouchableOpacity>
	  			<TouchableOpacity style={styles.scannerContainer} onPress={() => this.onModeChange()}>
	  				<Text style={styles.scanText}>Pay to {this.state.mode ? 'number' : 'address'}</Text>
	  				<Font name={"send"} size={16} color={"#007ee5"} />
	  			</TouchableOpacity>
  			</View>
	  	</View>}
	  	<View style={styles.containerBottom}>
	  		{this.state.scanner && <ScannerView close={this.onScanner} navigate={(publicKey) => this.props.navigate(publicKey)} />}
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
		flex: 2,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	containerMiddle: {
		flex: 2,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	containerBottom:{
		flex: 3,
		alignItems: 'center'
	},
	inputContainer: {
		width: '100%',
		flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'flex-end'
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
		width: '70%',
		borderBottomWidth: 2,
		borderBottomColor: '#007ee5',
		fontSize: 22
	},
	icon: {
		marginBottom: 8
	},
	innerContainer: {
		height: 100,
		width: '90%',
		justifyContent: 'space-around'
	},
	text: {
		fontSize: 16,
		color: 'black'
	},
	recentsContainer: {
		width: '100%',
		flexDirection: 'row'
	},
	circleContainer: {
		width: '20%',
		alignItems: 'center'
	},
	circle: {
		height: 40,
		width: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		backgroundColor: 'green'
	},
	initial: {
		fontSize: 16,
		color: 'white'
	},
	buttonContainer: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	scannerContainer: {
		height: 40,
		width: 150,
		borderRadius: 8,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 2,
		backgroundColor: 'white'
	},
	scanText: {
		fontSize: 16,
		marginRight: 7,
		color: 'black'
	},
	error: {
		fontSize: 16,
		color: 'red'
	}
});

export default PaymentPage;