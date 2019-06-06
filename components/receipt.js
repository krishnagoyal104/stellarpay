import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Entypo';

const ReceiptView = (props) => {
	const status = props.status === 'successful';
	const animation = status ? 'tick.json' : 'error.json';
  return(	
		<View style={styles.mainContainer}>
			<View>
				<View style={styles.container}>
					<Text style={styles.font1}>{status ? 'Paid Successfully' : 'Transaction failed'}</Text>
					{status ? <LottieView style={styles.animation} source={require(`../static/success.json`)} autoPlay loop={false} /> :
					<LottieView style={styles.animation} source={require(`../static/error.json`)} autoPlay loop={false} />}
				</View>
				<Text style={styles.font1}>{props.amount} {props.code || 'Lumens'}</Text>
			</View>
			<View>
				<Text style={styles.font2}>{props.recipient.name.toUpperCase()}'s wallet linked to</Text>
				<Text style={styles.font1}>{props.recipient.number}</Text>
			</View>
			<View>
				<Text style={styles.font2}>{moment().format('LLL')}</Text>
				<Text style={styles.font2}>{status && 'Transaction Id:'}</Text>
				{status ? <Text style={styles.font2} numberOfLines={1} ellipsizeMode={'tail'} selectable={true}>{props.id}</Text> :
				<Text style={styles.font3}>{props.id}</Text>}
			</View>
			<TouchableOpacity style={styles.navigateButton} onPress={() => props.navigate()}>
					<Icon name={'home'} size={20} color={'#007ee5'} style={{paddingTop: 4, paddingRight: 6}} />
					<Text style={styles.home}>Home</Text>
			</TouchableOpacity>
		</View>
  );	 	
}

const styles = StyleSheet.create({
	mainContainer: {
		height: '80%',
		paddingLeft: 25,
		paddingRight: 25,
		justifyContent: 'space-around',
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
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	animation: {
		height: 70,
		width: 70,
	},
	navigateButton: {
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