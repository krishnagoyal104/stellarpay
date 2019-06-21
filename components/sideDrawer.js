import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import Font5 from 'react-native-vector-icons/FontAwesome5';

const SideDrawerView = (props) => {
	return(
		<View style={styles.mainContainer}>
	  		<View style={styles.container1}>
	  			<View style={styles.nameContainer}>
		  			<View style={styles.iconContainer}>
		  				<Text style={styles.icon}>{props.name && props.name.substr(0,1).toUpperCase()}</Text>
		  			</View>
		  			<View style={styles.credentials}>
		  				<Text style={styles.name}>{props.name}</Text>
		  				<Text style={styles.number}>{props.number}</Text>
		  			</View>
	  			</View>
	  		</View>
	  		<View style={styles.container2}>
		  		<TouchableOpacity style={styles.itemContainer} onPress={() => props.navigate('DepositScreen', 'Add INR')}>
		  			<View style={styles.vectorIcon}>
		  				<Font name={"rupee"} size={25} color={"black"} />
		  			</View>	
		  			<View style={styles.partition}>
			  			<Text style={styles.text}>Add INR</Text>
		  			</View>
		  		</TouchableOpacity>
		  		<TouchableOpacity style={styles.itemContainer} onPress={() => props.navigate('TrustlineScreen', 'Create Trust')}>	
			  		<View style={styles.vectorIcon}>
			  			<Font name={"anchor"} size={20} color={"black"} />
			  		</View>	
			  		<View style={styles.partition}>
			  			<Text style={styles.text}>Trustline</Text>
			  		</View>
			  	</TouchableOpacity>
	  		</View>
	  		<View style={styles.container3}>
	  			<TouchableOpacity style={styles.itemContainer} onPress={() => props.navigate('ProfileScreen', 'Profile')}>
		  			<View style={styles.vectorIcon}>
		  				<Font5 name={"user-alt"} size={20} color={"black"} />
		  			</View>	
			  		<View style={styles.partition}>
			  			<Text style={styles.text}>Profile</Text>
			  		</View>
			  	</TouchableOpacity>
			  	<TouchableOpacity style={styles.itemContainer}>
			  		<View style={styles.vectorIcon}>
			  			<Entypo name={"info"} size={20} color={"black"} />
			  		</View>
			  		<Text style={styles.text}>About</Text>
			  	</TouchableOpacity>
	  		</View>
	  		<View style={styles.container4}></View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'white'
	},
	container1: {
		flex: 2,
		padding: 8,
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#E3E9ED'
	},
	container2: {
		flex: 2,
		justifyContent: 'space-evenly',
		borderBottomWidth: 1,
		borderBottomColor: '#E3E9ED'
	},
	container3: {
		flex: 2,
		justifyContent: 'space-evenly'
	},
	container4: {
		flex: 2
	},
	nameContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	iconContainer: {
		height: 60,
		width: 60,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#007ee5'
	},
	credentials: {
		paddingLeft: 8
	},
	icon: {
		fontSize: 25,
		color: 'white'
	},
	name: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'black'
	},
	number: {
		fontSize: 16,
		color: 'black'
	},
	itemContainer: {
		padding: 8,
		flexDirection: 'row',
		alignItems: 'center'
	},
	vectorIcon: {
		height: 30,
		width: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: 20,
		color: 'black',
	}
});

export default SideDrawerView;