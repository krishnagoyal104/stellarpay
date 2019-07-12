import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PassbookItemView = (props) => {
  return(	
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<View style={styles.imageContainer}>
					<Icon name={props.type === 'payment' ? "arrow-top-right" : "arrow-bottom-left"} size={35} color={"white"} />
				</View>
			</View>
			<View style={styles.rightContainer}>
				<View style={styles.topPartition}>
					<View style={styles.topLeftPartition}>
						<Text style={props.name.length !== 56 ? styles.font1 : styles.font2} numberOfLines={1}>{props.name}</Text>
					</View>
					<Text
					style={{color: props.type === 'payment' ? 'red' : 'green', fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold'}}>
					{props.amount.slice(0, -5)}</Text>
				</View>
				<View style={styles.bottomPartition}>
					<Text>{props.asset}</Text>
					<Text>{props.timestamp}</Text>
				</View>
			</View>
		</View>
  );		
}

const styles = StyleSheet.create({
	container: {
		width: '90%',
		height: 80,
		alignSelf: 'center',
		borderRadius: 6,
		padding: 8,
		marginTop: 11,
		flexDirection: 'row',
		justifyContent: 'space-between',
		elevation: 4,
		backgroundColor: 'white'
	},
	leftContainer: {
		width: '18%',
		justifyContent: 'center'
	},
	rightContainer: {
		width: '82%'
	},
	topPartition: {
		height: '60%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	bottomPartition: {
		height: '40%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	topLeftPartition: {
		maxWidth: '75%'
	},
	imageContainer: {
		height: 45,
		width: 45,
		borderRadius: 22.5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#007ee5'
	},
	font1: {
		fontSize: 20,
		color: 'black'
	},
	font2: {
		fontSize: 16,
		color: 'black'
	}
});

export default PassbookItemView;