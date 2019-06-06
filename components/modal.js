import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {removeError} from '../actions/error';

const ModalView = (props) => {
	return(
		<View>
      <Modal isVisible={props.error.isVisible} avoidKeyboard={true}
      onBackButtonPress={() => props.dispatch(removeError())} >
        <View style={styles.modal}>
        	<View style={styles.containerTop}>
	        	<Icon name={"error-outline"} size={30} color={"red"} />
	        	<Text style={styles.title}>{props.error.title}</Text>
		        <Text style={styles.description}>{props.error.description}</Text>
	        </View>
	        <View style={styles.containerBottom}>
		        <TouchableOpacity style={styles.button} onPress={() => props.dispatch(removeError())} >
	        		<Text style={styles.buttonText}>OK</Text>
	        	</TouchableOpacity>
        	</View>
        </View>
      </Modal>
    </View>
	);
}

const styles = StyleSheet.create({
	modal: {
		height: '25%',
		width: '85%',
		padding: 12,
		alignSelf: 'center',
		backgroundColor: 'white'
	},
	containerTop: {
		height: '70%',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	containerBottom: {
		height: '30%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	title: {
		paddingLeft: 3,
		fontSize: 20,
		color: 'black'
	},
	description: {
		fontSize: 18,
		color: 'black'
	},
	button: {
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#007ee5'
	},
	buttonText: {
		fontWeight: 'bold',
		color: 'white'
	}
});

const mapStateToProps = (state) => {
  return{
    error: state.error
  }
};

export default connect(mapStateToProps)(ModalView);