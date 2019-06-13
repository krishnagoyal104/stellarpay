import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, Keyboard, ActivityIndicator} from 'react-native';
import ScannerView from './scanner';
import ModalView from './modal';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/AntDesign';
import Font from 'react-native-vector-icons/FontAwesome';

class PaymentPage extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			code: '+91',
			number: '',
			scanner: false
		}

	}

	onCodeChange = (val) => {
		if(!val) return;
		this.setState(({
			code: val
		}));
	}

	onContactChange = (val) => {
		this.setState(({
			number: val
		}));
	}

	onScanner = () => {
		this.setState((prevState) => ({
			scanner: !prevState.scanner
		}));
	}

	onSubmit = () => {
		Keyboard.dismiss();
		const {code, number} = this.state;
		this.props.navigate(code + number);
	}

  render(){  
		return(	
			<View style={styles.mainConatiner}>
			  <View style={styles.containerTop}>
				  <View style={styles.inputContainer}>
				  	<TextInput style={styles.codeInput}
				  	value={this.state.code} selectionColor={'#007ee5'}
			  		onChangeText={val => this.onCodeChange(val)}
			  		maxLength={4}
			  		/>
			  		<TextInput style={styles.textInput} placeholder={'Enter mobile number'} selectionColor={'#007ee5'}
			  		onChangeText={val => this.onContactChange(val)}	
			  		autoFocus={true}
			  		keyboardType={"numeric"}
			  		/>
			  	</View>
			  	{this.props.loading ? <ActivityIndicator size="small" color="#007ee5" /> :
		  		(<TouchableOpacity style={styles.loginContainer} onPress={() => this.onSubmit()} >
			  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
								<Text style={styles.login}>Proceed</Text>
								<Icon name={'arrowright'} size={20} color={'white'} style={{paddingTop: 4, paddingLeft: 6}} />
							</View>
					 </TouchableOpacity>)
		  		}
		  	</View>
		  	<View style={styles.containerBottom}>
		  		<ModalView />
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
		color: '#EC2C1F'
	}
});

export default PaymentPage;