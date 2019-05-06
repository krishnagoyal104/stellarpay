import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid, Clipboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingsView = (props) => {
  return(	
	 	<View style={styles.container}>
	 		<View style={styles.keyContainer}>
				<View style={styles.header}>
					<Text style={styles.text}>Name</Text>
					<TouchableOpacity onPress={() => {Clipboard.setString(props.publicKey);
						ToastAndroid.show('Copied Text', ToastAndroid.SHORT);}}>
						<Icon name="content-copy" size={20} />
					</TouchableOpacity>
				</View>	
					<Text selectable={true} style={styles.key}>Name</Text>
			</View>
			<View style={styles.keyContainer}>
				<View style={styles.header}>
					<Text style={styles.text}>Number</Text>
					<TouchableOpacity onPress={() => {Clipboard.setString(props.publicKey);
						ToastAndroid.show('Copied Text', ToastAndroid.SHORT);}}>
						<Icon name="content-copy" size={20} />
					</TouchableOpacity>
				</View>
					<Text selectable={true} style={styles.key}>9898566412</Text>
			</View>
			<View style={styles.keyContainer}>
				<View style={styles.header}>
					<Text style={styles.text}>Your stellar address</Text>
					<TouchableOpacity onPress={() => {Clipboard.setString(props.publicKey);
						ToastAndroid.show('Copied Text', ToastAndroid.SHORT);}}>
						<Icon name="content-copy" size={20} />
					</TouchableOpacity>
				</View>	
					<Text selectable={true} style={styles.key}>{props.publicKey}</Text>
			</View>
			<View style={styles.keyContainer}>
				<View style={styles.header}>
					<Text style={styles.text}>Your private keys</Text>
					<TouchableOpacity onPress={() => {Clipboard.setString(props.privateKey);
						ToastAndroid.show('Copied Text', ToastAndroid.SHORT);}}>
						<Icon name="content-copy" size={20} />
					</TouchableOpacity>
				</View>	
					<Text selectable={true} style={styles.key}>{props.publicKey}</Text>
			</View>
	 	</View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	keyContainer: {
		width: '95%',
		padding: 5,
		elevation: 2,
		backgroundColor: 'white'
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	text: {
		fontSize: 18,
		color: 'black'
	},
	key: {
		fontSize: 12
	}
});



export default SettingsView;