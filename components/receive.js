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
				<QRCode
        value={props.publicKey}
        size={Dimensions.get('window').width/2}
        bgColor='#007ee5'
        fgColor='white'/>
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
		flex: 3,
		alignItems: 'center',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	container2: {
		flex: 1,
		alignItems: 'center'
	},
	keyContainer: {
		height: 80,
		width: '95%',
		justifyContent: 'center',
		padding: 5,
		elevation: 4,
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

export default ReceiveView;