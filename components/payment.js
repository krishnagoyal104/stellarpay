import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity} from 'react-native';

class PaymentPage extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			color1: '#C7C7CD',
			color2: '#C7C7CD',
			color3: '#C7C7CD',  
			contact: '',
			amount: ''
		}
	}

	onContactChange = (val) => {
		this.setState(() => ({
			contact: val
		}));
	}

	onAmountChange = (val) => {
		this.setState(() => ({
			amount: val 
		}));
	}

  render(){  
	return(	
		<View style={styles.mainConatiner}>
		  <View style={styles.containerTop}>
	  		<TextInput style={styles.textInput} placeholder={'Enter mobile number'} selectionColor={'#007ee5'}
	  		onChangeText={val => this.onContactChange(val)}	
	  		autoFocus={true} 
			underlineColorAndroid={this.state.color1}  
			onFocus={() => this.setState({color1: '#007ee5'})}
			onBlur={() => this.setState({color1: '#C7C7CD'})}
	  		 />
	  		<TextInput style={styles.textInput} placeholder={'Amount'} selectionColor={'#007ee5'} 
	  		onChangeText={val => this.onAmountChange(val)}
	  		autoFocus={true} 
			underlineColorAndroid={this.state.color2}  
			onFocus={() => this.setState({color2: '#007ee5'})}
			onBlur={() => this.setState({color2: '#C7C7CD'})}
	  		/>
	  		<TextInput style={styles.textInput} placeholder={'Asset'} selectionColor={'#007ee5'}
	  		onChangeText={val => this.onContactChange(val)}	
	  		autoFocus={true} 
			underlineColorAndroid={this.state.color3}  
			onFocus={() => this.setState({color3: '#007ee5'})}
			onBlur={() => this.setState({color3: '#C7C7CD'})}
	  		 />
	  		<TouchableOpacity style={styles.loginContainer} onPress={() => this.signIn()} >
				<Text style={styles.login}>Pay</Text>
			</TouchableOpacity>
	  	  </View>
	  	<View style={styles.containerBottom}></View>
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
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	containerBottom:{
		flex: 2,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	textInput: {
		height: 50,
		width: '85%',
		fontSize: 18
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
	}
});

export default PaymentPage;