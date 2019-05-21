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
	  			<Icon name={"user"} size={55} />
	  			<Text style={styles.name}>name</Text>
	  			<Text style={styles.number}>9898556412</Text>
	  		</View>
	  		<View style={styles.container2}>
		  		<TouchableOpacity style={styles.itemContainer}>
		  			<Font name={"dollar"} size={20} color={"black"} />
		  			<View style={styles.partition}>
			  			<Text style={styles.text}>Assets</Text>
		  			</View>
		  		</TouchableOpacity>
		  		<TouchableOpacity style={styles.itemContainer}>
		  			<Font name={"exchange"} size={20} color={"black"} />
			  		<View style={styles.partition}>
			  			<Text style={styles.text}>Trade</Text>
			  		</View>
			  	</TouchableOpacity>
			  	<TouchableOpacity style={styles.itemContainer}>	
			  		<Font name={"anchor"} size={20} color={"black"} />	
			  		<View style={styles.partition}>
			  			<Text style={styles.text}>Anchor</Text>
			  		</View>
			  	</TouchableOpacity>	
	  		</View>
	  		<View style={styles.container3}>
	  			<TouchableOpacity style={styles.itemContainer} onPress={() => props.navigate()}>
		  			<Font5 name={"user-alt"} size={20} color={"black"} />
			  		<View style={styles.partition}>
			  			<Text style={styles.text}>Profile</Text>
			  		</View>
			  	</TouchableOpacity>
			  	<TouchableOpacity style={styles.itemContainer}>
			  		<Entypo name={"info"} size={20} color={"black"} />
			  		<View style={styles.partition}>
			  			<Text style={styles.text}>About</Text>
			  		</View>
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
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 2,
		borderBottomColor: '#E3E9ED'
	},
	name: {
		fontSize: 18,
		color: 'black',
		fontWeight: 'bold'
	},
	number: {
		fontSize: 16,
		color: 'black'
	},
	container2: {
		flex: 3,
		justifyContent: 'space-evenly',
		borderBottomWidth: 2,
		borderBottomColor: '#E3E9ED'
	},
	container3: {
		flex: 2,
		justifyContent: 'space-evenly'
	},
	text: {
		fontSize: 20,
		color: 'black',
	},
	itemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	partition: {
		width: '70%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	container4: {
		flex: 1
	}
});

export default SideDrawerView;