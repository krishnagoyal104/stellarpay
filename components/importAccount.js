import React from 'react';
import {View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import ButtonView from './button';

class ImportAccountView extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			key: ''
		}
	}

	onKeyChange = (val) => {
		this.setState(({
			key: val
		}));
	}

	render(){
		return(	
	 		<KeyboardAvoidingView style={styles.mainContainer} behavior="padding">
		 		<View style={styles.containerTop}>
		 			<View style={styles.imageContainer}>
		 				<Image source={require('../static/keychain.png')} resizeMode={"contain"} style={styles.image} />
		 			</View>
		 		</View>
		 		<View style={styles.containerBottom}>
		 			<Text style={styles.instruction}>Please enter your private key.</Text>
		 			<TextInput style={styles.input} selectionColor={"black"} onChangeText={val => this.onKeyChange(val)} />
		 			{this.props.loading ? <ActivityIndicator size="small" color="#007ee5" /> :
		 			<ButtonView name={'Import'} handler={() => this.props.importAccount(this.state.key)} />}
		 		</View>
	 		</KeyboardAvoidingView>
  	);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	containerTop: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	containerBottom: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	imageContainer: {
		height: '80%',
		width: '80%'
	},
	image: {
		height: '100%',
		width: '100%'
	},
	instruction: {
		fontSize: 24,
		color: 'black'
	},
	input: {
		height: 55,
		width: '80%',
		fontSize: 22,
		borderWidth: 0.5,
	}
});



export default ImportAccountView;