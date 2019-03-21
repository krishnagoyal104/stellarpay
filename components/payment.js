import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Font from 'react-native-vector-icons/FontAwesome';

class PaymentPage extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			color1: '#C7C7CD',
			color2: '#C7C7CD',
			receiver: '',
			amount: ''
		}
	}

	onContactChange = (val) => {
		this.setState(() => ({
			receiver: val
		}));
	}

	onAmountChange = (val) => {
		this.setState(() => ({
			amount: val 
		}));
	}
	makePayment = () => {
		const {receiver, amount} = this.state;
		this.props.pay(receiver, amount);
	}

  render(){  
	return(	
		<View style={styles.mainConatiner}>
		  <View style={styles.containerTop}>
			  <View style={styles.inputIcons}>
			  <Icon name={'contacts'} size={22} color={'#007ee5'} style={{paddingTop: 16}} /> 
		  		<TextInput style={styles.textInput} placeholder={'Enter mobile number'} selectionColor={'#007ee5'}
		  		onChangeText={val => this.onContactChange(val)}	
		  		autoFocus={true} 
					underlineColorAndroid={this.state.color1}  
					onFocus={() => this.setState({color1: '#007ee5'})}
					onBlur={() => this.setState({color1: '#C7C7CD'})}
		  		 />
		  	</View> 
		  	<View style={styles.inputIcons}>
			  	<Font name={'send'} size={20} color={'#007ee5'} style={{paddingTop: 16}} /> 
		  		<TextInput style={styles.textInput} placeholder={'Amount'} selectionColor={'#007ee5'} 
			  	onChangeText={val => this.onAmountChange(val)} 
					underlineColorAndroid={this.state.color2}  
					onFocus={() => this.setState({color2: '#007ee5'})}
					onBlur={() => this.setState({color2: '#C7C7CD'})}
	  		/>
	  	  </View>
	  	  {this.props.loading ? <ActivityIndicator size="small" color="#007ee5" /> : 
	  		(<TouchableOpacity style={styles.loginContainer} onPress={() => this.makePayment()} >
					<Text style={styles.login}>Pay</Text>
				 </TouchableOpacity>)	
				}
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
		flex: 3,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	textInput: {
		height: 50,
		width: '80%',
		fontSize: 18
	},
	inputIcons: {
		width: '95%',
	  justifyContent: 'flex-start',
	  flexDirection: 'row'
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
	}
});

export default PaymentPage;