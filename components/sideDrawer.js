import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SideDrawerView = (props) => {
	return(
		<View style={styles.mainContainer}>
	  		<View style={styles.container1}>
	  			<Text>name</Text>
	  			<Text>number</Text>
	  		</View>
	  		<View style={styles.container2}>
		  		<View style={styles.itemContainer}>
		  			<Text style={styles.text}>Assets</Text>
		  		</View>
		  		<View style={styles.itemContainer}>
		  			<Text style={styles.text}>Trade</Text>
		  		</View>
		  		<View style={styles.itemContainer}>	
		  			<Text style={styles.text}>Anchor</Text>
		  		</View>
		  		<View style={styles.itemContainer}>	
		  			<Text style={styles.text}>Settings</Text>
		  		</View>
		  		<View style={styles.itemContainer}>	
		  			<Text style={styles.text}>Security</Text>
		  		</View>
		  		<View style={styles.itemContainer}>	
		  			<Text style={styles.text}>About</Text>
		  		</View>	
	  		</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'white'
	},
	container1: {
		flex: 1,
		backgroundColor: '#007ee5'
	},
	container2: {
		flex: 3,
		justifyContent: 'space-evenly'
	},
	text: {
		fontSize: 21
	},
	itemContainer: {
		height: '15%',
		width: '100%',
		borderBottomWidth: 0.2,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default SideDrawerView;