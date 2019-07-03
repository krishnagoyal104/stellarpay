import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ButtonView = (props) => {

  return(
  	<TouchableOpacity style={styles.button} onPress={props.handler}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
	button: {
    height: 50,
    width: '90%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007ee5',
  },
  buttonText: {
    fontSize: 22,
    color: 'white'
  }
});

export default ButtonView;