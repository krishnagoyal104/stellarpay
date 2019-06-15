import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ListEmptyComponent = (props) => {
  return(
  	<View style={styles.container}>
 			<Image style={styles.image} source={require('../static/ledger.png')} />
  		<Text style={styles.text}>No Transactions Found</Text>
  	</View>
  );
}

const styles = StyleSheet.create({
	container: {
		height: 100,
		width: 200,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: 60,
		width: 60
	},
	text: {
		fontSize: 16,
		color: 'black'
	}
});



export default ListEmptyComponent;