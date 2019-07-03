import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeView = (props) => {
  return(	
 	<View style={styles.mainContainer}>
 		<View style={styles.container1}>
	 		<TouchableOpacity style={styles.innerContainers} onPress={() => props.navigateToPayment()}>
		 		<View>
	 				<Text style={styles.text}>Send</Text>
		 		</View>
	 		</TouchableOpacity>
	 		<TouchableOpacity style={styles.innerContainers} onPress={() => props.navigateToReceive()}>
	 		<View> 		
	 			<Text style={styles.text}>Receive</Text>
	 		</View>	
	 		</TouchableOpacity>	
 		</View>	
	 	<View style={styles.container2}></View>
 	</View>
  );
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	container1: {
		flex: 2,
		flexDirection: 'row',
		backgroundColor: '#007ee5',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	container2: {
		flex: 1
	},
	innerContainers: {
		height: 50,
		width: 120,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 60
	},
	text: {
		fontSize: 18,
		color: '#007ee5'
	},
	icon: {
		padding: 8,
		borderRadius: 50,
		backgroundColor: 'white',
		justifyContent: 'flex-start'
	}
});



export default HomeView;