import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const PassbookItemView = (props) => {
  return(	
    <View style={styles.mainContainer}>
			<View style={styles.container}>
				<Text style={styles.text1} numberOfLines={1}>{props.recipient}</Text>
				<Text style={styles.text2}>{props.amount}</Text>
			</View>
    </View>
  );		
}

const styles = StyleSheet.create({
	mainContainer: {
		borderRadius: 3,
		borderWidth: 0.3,
		padding: 8,
		marginBottom: 11
	},
	text1: {
		fontSize: 16
	},
	text2: {
		color: 'green',
		fontSize: 12
	}
});

export default PassbookItemView;