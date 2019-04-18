import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, Dimensions} from 'react-native';

const WalletItemView = (props) => {
  return(	
    <View style={styles.mainContainer}>
			<View style={styles.imageContainer}>
				<Image source={require('../static/stellar.png')} style={{height: 50, width: 50}} />
			</View>
			<View style={styles}>
				<Text style={styles.text}>Lumens</Text>
				<Text style={styles.text}>{props.balance.slice(0, -8)}</Text>
			</View>
			<Text style={styles.text}>${props.balance.slice(0, -8)}</Text>
    </View>
  );		
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: Dimensions.get('window').height/8,
		backgroundColor: '#007ee5',
		borderRadius: 12,
		padding: 5,
		margin: 8
	},
	imageContainer: {
		borderRadius: 25,
		backgroundColor: 'white',
		backgroundColor: '#99D3EC'
	},
	text: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'sans-serif-condensed'
	}
});

export default WalletItemView;