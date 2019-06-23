import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid, Clipboard} from 'react-native';
import TouchID from 'react-native-touch-id';
import Icon from 'react-native-vector-icons/Feather';
import Font from 'react-native-vector-icons/FontAwesome';
import MI from 'react-native-vector-icons/MaterialIcons';

class ProfileView extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			auth: false
		}
	}

	authenticate = async() => {
		try{
			await TouchID.authenticate('Reveal Private Key', {});
			this.setState(({
				auth: true
			}));
		}
  	catch(e){
  		this.props.alert();
  		this.setState(({
  			auth: true
  		}));
  	}
  }	

	render(){

		return(	
		 	<View style={styles.mainContainer}>
		 		<View style={styles.topContainer}>
		 			<View style={styles.profile}>
		  			<Icon name={"user"} size={80} color={"white"} />
	  			</View>
	  			<Text style={styles.name}>{this.props.name}</Text>
		  		<Text style={styles.number}>{this.props.number}</Text>
	  		</View>
	  		<View style={styles.bottomContainer}>
		  		<View style={styles.keyContainer}>
						<View style={styles.header}>
							<Text style={styles.text}>Your stellar address</Text>
							<TouchableOpacity onPress={() => {Clipboard.setString(this.props.publicKey);
								ToastAndroid.show('Copied Text', ToastAndroid.SHORT);}}>
								<MI name="content-copy" size={20} />
							</TouchableOpacity>
						</View>
						<Text selectable={true} style={styles.key}>{this.props.publicKey}</Text>
				</View>
				{this.state.auth && !this.props.isVisible ?
					<View style={styles.keyContainer}>
						<View style={styles.header}>
							<Text style={styles.text}>Your private key</Text>
							<TouchableOpacity onPress={() => {Clipboard.setString(this.props.secretKey);
								ToastAndroid.show('Copied Text', ToastAndroid.SHORT);}}>
								<MI name={"content-copy"} size={20} />
							</TouchableOpacity>
						</View>	
						<Text selectable={true} style={styles.key}>{this.props.secretKey}</Text>
				</View> :
		  		<TouchableOpacity style={styles.privateKeyContainer} onPress={() => this.authenticate()}>
		  			<Font name={"lock"} size={25} color={"black"} />
		  			<Text style={styles.text}>Reveal Private Key</Text>
		  		</TouchableOpacity>
			}
	  		</View>
		 	</View>
	 	);

	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'white'
	},
	topContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 2,
		borderBottomColor: '#E3E9ED',
	},
	profile: {
		height: 100,
		width: 100,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		backgroundColor: '#007ee5'
	},
	bottomContainer: {
		flex: 2,
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	text: {
		fontSize: 18,
		color: 'black',
		fontWeight: 'bold'
	},
	name: {
		fontSize: 22,
		color: 'black',
		fontWeight: 'bold'
	},
	number: {
		fontSize: 18,
		color: 'black'
	},
	publicKeyContainer: {
		width: '95%',
		borderWidth: 1,
		backgroundColor: 'white'
	},
	privateKeyContainer: {
		alignItems: 'center',
	},
	keyContainer: {
		height: 100,
		width: '95%',
		padding: 11,
		justifyContent: 'space-around',
		backgroundColor: 'white',
		elevation: 2
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	key: {
		fontSize: 12
	}
});



export default ProfileView;