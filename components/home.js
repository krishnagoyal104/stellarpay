import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const HomeView = (props) => {
  return(	
 	<View style={styles.mainContainer}>
 		<View style={styles.container1}>
	 		<TouchableOpacity style={styles.innerContainers} onPress={() => props.navigateToPayment()}>
 				<Text style={styles.text}>Send</Text>
 				<Image source={require('../static/send.png')} style={styles.image} resizeMode={"contain"} />
	 		</TouchableOpacity>
	 		<TouchableOpacity style={styles.innerContainers} onPress={() => props.navigateToReceive()}>
	 			<Text style={styles.text}>Receive</Text>
	 			<Image source={require('../static/receive.png')} style={styles.image} resizeMode={"contain"} />
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
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 60
	},
	text: {
		fontSize: 18,
		color: '#007ee5'
	},
	image: {
		height: 20,
		width: 20,
		marginLeft: 8,
		tintColor: '#007ee5'
	}
});



export default HomeView;