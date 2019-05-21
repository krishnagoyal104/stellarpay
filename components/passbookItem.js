import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PassbookItemView = (props) => {
  return(	
    <View>
			<View style={styles.container}>
				<View style={styles.leftContainer}>
					<View style={styles.imageContainer}>
						<Icon name={props.type === 'payment' ? "arrow-top-right" : "arrow-bottom-left"} size={35} color={"white"} />
					</View>
					<View style={styles.rightPartition}>
						<Text style={styles.name}>{props.name}</Text>
						<Text>{props.asset}</Text>
					</View>
				</View>	
				<View style={styles.rightContainer}>
					<Text
					style={{color: props.type === 'payment' ? 'red' : 'green', fontSize: 20, fontFamily: 'Roboto', fontWeight: 'bold'}}>
						{props.amount.slice(0, -5)}</Text>
					<Text>{props.timestamp}</Text>
				</View>
			</View>
    </View>
  );		
}

const styles = StyleSheet.create({
	container: {
		width: '95%',
		height: Dimensions.get('window').height * 0.12,
		alignSelf: 'center',
		borderRadius: 6,
		padding: 8,
		marginTop: 11,
		flexDirection: 'row',
		justifyContent: 'space-between',
		elevation: 3
	},
	imageContainer: {
		height: 45,
		width: 45,
		borderRadius: 22.5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#007ee5'
	},
	leftContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	rightPartition: {
		height: '100%',
		marginLeft: 12,
		justifyContent: 'space-around'
	},
	rightContainer: {
		alignItems: 'flex-end',
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 20,
		color: 'black'
	},
	image: {
		height: 35,
		width: '10%'
	}
});

export default PassbookItemView;