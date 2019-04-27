import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

const InitializeView = (props) => {
  return(	
  	<View style={styles.container}>
  		<Text style={styles.text}>Loading...</Text>
		</View>		
  );	 	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 26
	}
});

export default InitializeView;