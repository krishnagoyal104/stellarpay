import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeView = (props) => {
  return(	
 	<View style={styles.mainContainer}>
 		<View style={styles.container1}>
 		<View style={styles.innerContainers}>
	 		<TouchableOpacity onPress={() => props.navigateToPayment()}>
 				<Text style={styles.text}>Send</Text>
	 		</TouchableOpacity>
 		</View>
 		<View style={styles.innerContainers}>
 		<TouchableOpacity onPress={() => props.navigateToReceive()}> 		
 			<Text style={styles.text}>Receive</Text>
 		</TouchableOpacity>	
 		</View>	
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
		height: 35,
		width: 90,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 8
	},
	text: {
		fontSize: 16,
		color: '#007ee5',
		/*paddingTop: 8,
		paddingLeft: 25,
		paddingRight: 25,
		paddingBottom: 8,
		alignItems: 'center',
		borderRadius: 10,
		backgroundColor: 'white'*/
	},
	icon: {
		padding: 8,
		borderRadius: 50,
		backgroundColor: 'white',
		justifyContent: 'flex-start'
		//alignItems: 'center'
	}
});



export default HomeView;