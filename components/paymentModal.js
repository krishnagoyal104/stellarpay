import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';
import ButtonView from './button';

const PaymentModal = (props) => {
	return(
		<View>
			<Modal isVisible={props.isVisible}
      onBackButtonPress={() => props.closeModal()}
      style={styles.modal}>
				<View style={styles.container}>
					<View style={styles.topContainer}>
						<View>
							<Text style={styles.text1}>You are paying</Text>
							<Text style={styles.text1}>{props.amount} {props.asset}</Text>
						</View>
						<TouchableOpacity onPress={() => props.closeModal()}>
							<Ionicon name={"ios-close-circle"} size={30} />
						</TouchableOpacity>
					</View>
					<View style={styles.bottomContainer}>
						<View>
							<Text>To</Text>
							<Text style={styles.text2}>{props.name.toUpperCase()}</Text>
							<Text style={styles.text1}>{props.number}</Text>
						</View>
						<View style={styles.walletIcon}>
				  		<Icon name={"wallet"} size={30} color={"#007ee5"} />
				  	</View>
					</View>
					<ButtonView name={'Confirm'} handler={() => {
						props.closeModal();
						props.makePayment()}} />
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	modal: {
		margin: 0,
		justifyContent: 'flex-end'
	},
	container: {
		height: '60%',
		paddingLeft: 25,
		paddingRight: 25,
		justifyContent: 'space-around',
		backgroundColor: 'white'
	},
	topContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	bottomContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	text1: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black'
	},
	text2: {
		fontSize: 20,
		color: 'black'
	},
	walletIcon: {
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		elevation: 4,
		backgroundColor: 'white'
	},
});

export default PaymentModal;