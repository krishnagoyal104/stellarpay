import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Clipboard, ToastAndroid, Dimensions} from 'react-native';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ReceiveView = (props) => {
	return(
		<View style={styles.mainContainer}>
			<View style={styles.container1}>
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
			</View>		
			<View style={styles.container2}>
				<QRCode
        value={props.publicKey}
        size={Dimensions.get('window').width/2}
        bgColor='#007ee5'
        fgColor='white'/>
    	</View>    
    </View>   
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	container1: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		alignItems: 'center'
	},
	keyContainer: {
		width: '95%',
		padding: 5,
		backgroundColor: '#E3E9ED'
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	text: {
		fontSize: 18,
		color: 'black'
	},
	container2: {
		flex: 3,
		alignItems: 'center'
	},
	key: {
		fontSize: 12
	}
});

export default ReceiveView;