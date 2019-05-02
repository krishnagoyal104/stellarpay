import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const PassbookItemView = (props) => {
  return(	
    <View style={styles.mainContainer}>
  		<Image source={require('../static/bill.png')} style={styles.image} />
			<View style={styles.container}>
				<View>
					<Text style={styles.name}>{props.name}</Text>
					<Text>{props.asset}</Text>
				</View>
				<View style={styles.rightContainer}>
					<Text
					style={{color: props.type === 'payment' ? 'green' : 'red', fontSize: 16}}>
						{props.amount.slice(0, -5)}</Text>
					<Text>{props.timestamp}</Text>
				</View>
			</View>
    </View>
  );		
}

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row'
	},
	container: {
		width: '90%',
		alignSelf: 'center',
		borderRadius: 3,
		borderWidth: 0.3,
		padding: 8,
		marginTop: 11,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	rightContainer: {
		alignItems: 'flex-end'
	},
	name: {
		fontSize: 18,
		color: 'black'
	},
	image: {
		height: 35,
		width: '10%'
	}
});

export default PassbookItemView;