import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, Dimensions} from 'react-native';

const WalletItemView = (props) => {
  return(	
    <View style={styles.mainContainer}>
			<View style={styles.container}>
				<Text style={styles.text}>Balance</Text>
				<Text style={styles.text}>{props.balance}</Text>
			</View>
			<View style={styles.container}>
				<Text style={styles.text}>Asset</Text>
				<Text style={styles.text}>{props.asset_type}</Text>
			</View>
    </View>
  );		
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#007ee5',
		borderWidth: 3,
		borderColor: 'white',
		padding: 5,
		marginBottom: 2
	},
	container:{
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	text: {
		color: 'white',
		fontSize: 20
	}
});

export default WalletItemView;