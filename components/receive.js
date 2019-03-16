import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ReceiveView = (props) => {
	return(
		<View style={styles.container}>
			<Text style={styles.text}>Address:</Text>
			<Text style={styles.text}>{props.publicKey}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 0.5,
		borderRadius: 5
	},
	text: {
		fontSize: 20
	}
});

export default ReceiveView;