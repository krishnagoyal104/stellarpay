import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import ActivityIndicator from './activityIndicator';
import Font from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Entypo';

class DepositView extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			amount: ''
		}
	}

	onAmountChange = (val) => {
		this.setState(({
			amount: val
		}));
	}

	onSubmit = () => {
		this.props.creditAccount(this.state.amount);
	}

	render(){
		return(	
 		<View style={styles.mainContainer}>
 			<View style={styles.topContainer}>
 				<View style={styles.balanceContainer}>
 					<Text style={styles.balance}>Available balance: {this.props.balance.length && this.props.balance[0].balance} INR</Text>
 				</View>
 				<View style={styles.inputContainer}>
 					<Icon name={'triangle-right'} size={20} color={'#007ee5'} style={{paddingTop: 16}} />
	 				<TextInput style={styles.input} placeholder={'Enter Amount'}
	 				onChangeText={(val) => this.onAmountChange(val)}
	 				value={this.state.amount}
	 				selectionColor={'#007ee5'}
	 				keyboardType={'numeric'} />
 				</View>
 				<View style={styles.cardContainer}>
	 				<TouchableOpacity style={styles.card} onPress={() => this.onAmountChange('500')} >
	 					<Text style={styles.text}>500</Text>
	 				</TouchableOpacity>
	 				<TouchableOpacity style={styles.card} onPress={() => this.onAmountChange('1000')} >
	 					<Text style={styles.text}>1000</Text>
	 				</TouchableOpacity>
	 				<TouchableOpacity style={styles.card} onPress={() => this.onAmountChange('2000')} >
	 					<Text style={styles.text}>2000</Text>
	 				</TouchableOpacity>
 				</View>
 				{this.props.loading ? <ActivityIndicator /> :
 				<TouchableOpacity style={styles.button} onPress={() => this.onSubmit()} >
					<Text style={styles.buttonText}>Add Amount</Text>
				</TouchableOpacity>}
 			</View>
 			<View style={styles.bottomContainer}>
 				<View style={styles.infoContainer}>
 					<Text style={styles.infoText}>
 						INR is a stable coin issued by StellarPay. You can add these tokens to your account
 						once you've established a trustline with StellarPay.
 					</Text>
 				</View>
 			</View>
 		</View>
 		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'white'
	},
	topContainer: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	bottomContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	balanceContainer: {
		height: 35,
		width: '90%',
		borderRadius: 8,
		paddingLeft: '10%',
		justifyContent: 'center',
		backgroundColor: '#53b6eb'
	},
	balance: {
		color: 'white'
	},
	inputContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	input: {
		width: '90%',
		fontSize: 25,
		borderBottomWidth: 2,
		borderBottomColor: '#007ee5'
	},
	cardContainer: {
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	card: {
		width: '25%',
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#007ee5'
	},
	text: {
		fontSize: 18,
		color: 'black'
	},
	button: {
		height: 50,
		width: '90%',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#007ee5',
	},
	buttonText: {
		fontSize: 22,
		color: 'white'
	},
	errorContainer: {
		height: '70%',
		width: '100%',
		padding: 12,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	error: {
		fontSize: 16,
		color: 'red'
	},
	infoContainer: {
		height: 120,
		width: '90%',
		padding: 8,
		borderWidth: 0.2,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	infoText: {
		textAlign: 'center',
		fontSize: 16
	}
});



export default DepositView;