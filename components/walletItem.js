import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const WalletItemView = (props) => {
  return(	
    <View style={styles.container}>
			<View style={styles.imageContainer}>
				<Icon name={"wallet"} size={25} />
			</View>
				<Text style={styles.text}>{props.asset_type === 'native' ? 'Lumens' : props.asset_code}</Text>
				<Text style={styles.text}>{props.balance.slice(0, -8)}</Text>
    </View>
  );		
}

const styles = StyleSheet.create({
	container: {
		height: 80,
		width: '90%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		borderRadius: 6,
		padding: 5,
		marginTop: 16,
		elevation: 4,
		backgroundColor: 'white'
	},
	imageContainer: {
		height: 50,
		width: 50,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#99D3EC'
	},
	text: {
		color: 'black',
		fontSize: 20,
	}
});

export default WalletItemView;