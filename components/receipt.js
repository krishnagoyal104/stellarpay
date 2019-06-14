import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Entypo';

const ReceiptView = (props) => {
	const status = props.status === 'successful';
	const renderItems = () => {
		switch(props.status){
			case 'successful':
				return {
					type: 'payment',
					text: 'Paid Successfully',
					animation: <LottieView style={styles.animation} source={require(`../static/success.json`)} autoPlay loop={false} />
				};
			case 'failed':
				return {
					type: 'payment',
					text: 'Transaction Failed',
					animation: <LottieView style={styles.animation} source={require(`../static/error.json`)} autoPlay loop={false} />		
				};
			case 'deposit successful':
				return {
					type: 'deposit',
					text: 'Added Successfully',
					animation: <LottieView style={styles.animation} source={require(`../static/success.json`)} autoPlay loop={false} />
				};
			case 'deposit failed':
				return {
					type: 'deposit',
					text: 'Transaction Failed',
					animation: <LottieView style={styles.animation} source={require(`../static/error.json`)} autoPlay loop={false} />
				};	
		}
	}
	const {type, text, animation} = renderItems();
  return(	
		<View style={styles.mainContainer}>
			<View style={styles.container}>
				<View>
					<View style={styles.header}>
						<Text style={styles.font1}>{text}</Text>
						{animation}
					</View>
					<Text style={styles.font1}>{props.amount} {props.code || type === 'deposit' ? 'INR' : 'Lumens'}</Text>
				</View>
				{type !== 'deposit' && 
					<View>
						<Text style={styles.font2}>{props.recipient.name.toUpperCase()}'s wallet linked to</Text>
						<Text style={styles.font1}>{props.recipient.number}</Text>
					</View>
				}
				<Text style={styles.font2}>{moment().format('LLL')}</Text>
				<View>
					<Text style={styles.font2}>{props.id && 'Transaction Id:'}</Text>
					{status ? <Text style={styles.font2} selectable={true}>{props.id}</Text> :
					<Text style={styles.font3}>{props.id}</Text>}
				</View>
				<TouchableOpacity style={styles.navigationButton} onPress={() => props.navigate()}>
						<Icon name={'home'} size={20} color={'#007ee5'} style={{paddingTop: 4, paddingRight: 6}} />
						<Text style={styles.home}>Home</Text>
				</TouchableOpacity>
			</View>	
		</View>
  );	 	
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		height: '80%',
		width: '90%',
		paddingLeft: 25,
		paddingRight: 25,
		justifyContent: 'space-around',
		elevation: 2,
		backgroundColor: 'white'
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	font1: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'black'
	},
	font2: {
		fontSize: 16,
		color: 'black'
	},
	font3: {
		fontSize: 20,
		color: 'black'
	},
	animation: {
		height: 70,
		width: 70,
	},
	navigationButton: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignSelf: 'center'
	},
	home: {
		color: 'black',
		fontSize: 20
	}
});

export default ReceiptView;