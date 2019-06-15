import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome';

class VerificationView extends React.Component{

	constructor(props){
		super(props);
    this.state = {
    	otp: ''
    }
	}

	onEnter = (text) => {
		this.setState(({
			otp: text
		}));
	}

	resendOtp = () => {
		this.props.resendOtp(this.props.data);
	}

  onSubmit = () => {
  	this.props.onSubmit(this.state.otp);
  }

	render(){

		return(	
		 	<View style={styles.mainContainer}>
		 		<View style={styles.topContainer}>
		 			<Text style={styles.text}>Enter the verification code</Text>
		 			<TextInput style={styles.input}
		 			selectionColor={'#007ee5'} onChangeText={(val) => this.onEnter(val)}
		 			maxLength={6}
		 			keyboardType={'numeric'} />
		 			<View style={styles.resendContainer}>
		 				<Text>Didn't receive the code?</Text>
		 				<TouchableOpacity onPress={() => this.resendOtp()}>
		 					<Text style={styles.resend}>Resend</Text>
		 				</TouchableOpacity>
		 			</View>	
			 		<TouchableOpacity style={styles.button} onPress={() => this.onSubmit()} >
			  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
								<Text style={styles.buttonText}>Verify</Text>
								{this.props.loading ? <ActivityIndicator size="small" color="white" /> : <Font name={'send'} size={20} color={'white'} style={{paddingTop: 4, paddingLeft: 6}} />}
							</View>
					 </TouchableOpacity>
		 		</View>
		 		<View style={styles.bottomContainer}></View>
		 	</View>
	  );
	}

}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	topContainer: {
		flex: 2,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	text: {
		fontSize: 24,
		color: 'black'
	},
	input: {
		width: '30%',
		fontSize: 25,
		borderBottomWidth: 2,
		borderBottomColor: '#007ee5'
	},
	bottomContainer: {
		flex: 2
	},
	resendContainer: {
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	resend: {
		color: '#E32C1F'
	},
	button: {
		width: '40%',
		height: 50,
		borderRadius: 8,
		backgroundColor: '#007ee5',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: 'white',
		fontSize: 20
	}
});



export default VerificationView;