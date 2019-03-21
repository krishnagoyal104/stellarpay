import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import QRCode from 'react-native-qrcode';

const ReceiveView = (props) => {
	return(
		<View style={styles.mainContainer}>
			<View style={styles.container1}>
				<View style={styles.keyContainer}>
					<Text selectable={true} style={styles.text}>{props.publicKey}</Text>
			  </View>		
			</View>
			<View style={styles.container2}>
				<View style={styles.qrContainer}>
					<QRCode
	        value={props.publicKey}
	        size={Dimensions.get('window').width/2}
	        bgColor='#007ee5'
	        fgColor='white'/>
			  </View>      
    	</View>    
    </View>   
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#007ee5'
	},
	container1: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	container2: {
		flex: 3,
		alignItems: 'center'
	},
	keyContainer: {
		backgroundColor: 'white',
	},
	qrContainer: {
		padding: 25,
		backgroundColor: 'white'
	},
	text: {
		color: '#007ee5',
		fontSize: 12
	}
});

export default ReceiveView;