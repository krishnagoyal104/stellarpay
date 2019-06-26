import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

const AssetItemView = (props) => {
  return(	
 		<TouchableOpacity style={styles.container} onPress={() => props.navigate(props.index)}>
 			<View style={styles.row}>
				<View style={styles.imageContainer}>
					{props.image ? <Image source={{uri: props.image}} style={styles.image} resizeMode={'contain'} /> :
					<Entypo name={"wallet"} size={25} color={"#007ee5"} />}
				</View>
				<View>
					<View>
						<Text style={styles.text1}>Code: {props.code}</Text>
						{props.anchor_asset && <Text>backed by {props.anchor_asset}</Text>}
					</View>
				</View>
			</View>	
			<View>
				<Icon name={"ios-arrow-forward"} size={20} color={"#99D3EC"} />
			</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
	container: {
		height: 80,
		width: '90%',
		alignSelf: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 8,
		padding: 5,
		margin: 8,
		elevation: 2.5,
		backgroundColor: 'white'
	},
	imageContainer: {
		height: 50,
		width: 50,
		borderRadius: 25,
		marginRight: 25,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: 35,
		width: 35
	},
	row: {
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center'
	},
	text1: {
		fontSize: 18,
		color: 'black'
	},
	text2: {
		fontSize: 12
	}
});



export default AssetItemView;