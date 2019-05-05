import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import OtpInputs from 'react-native-otp-inputs'
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

  onSubmit = () => {
  	this.props.onSubmit(this.state.otp);
  }

	render(){

		return(	
		 	<View style={styles.mainContainer}>
		 		<View style={styles.topContainer}>
		 		</View>
		 		<View style={styles.bottomContainer}>
		 			<Text style={styles.text}>Enter the verification code</Text>
		 			<OtpInputs handleChange={(code) => this.onEnter(code)} numberOfInputs={6}	
		 			focusedBorderColor="green" unfocusedBorderColor="#007ee5"
		 			containerStyles={styles.otpContainer}
		 			inputsContainerStyles={styles.otpInputContainer}
		 			inputStyles={styles.otpInputs} />
		 			<View style={styles.resendContainer}>
		 				<Text>Didn't receive the code?</Text>
		 				<TouchableOpacity>
		 					<Text style={styles.resend}>Resend</Text>
		 				</TouchableOpacity>
		 			</View>	
			 		<TouchableOpacity style={styles.button} onPress={() => this.onSubmit()} >
			  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
								<Text style={styles.buttonText}>Verify</Text>
								{this.props.loading ? <ActivityIndicator size="small" color="#007ee5" /> : <Font name={'send'} size={20} color={'white'} style={{paddingTop: 4, paddingLeft: 6}} />}
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
	topContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 24,
		color: 'black'
	},
	otpContainer: {
		height: '20%',
		justifyContent: 'center'
	},
	otpInputContainer: {
		width: '90%'
	},
	otpInputs: {
		color: '#E32C1F'
	},
	bottomContainer: {
		flex: 2,
		justifyContent: 'space-around',
		alignItems: 'center'
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
		borderRadius: 25,
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