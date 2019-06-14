import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

import Icon from 'react-native-vector-icons/Entypo';

const ActivityIndicator = (props) => {
  return(
  	<View style={styles.container}>
	  	<LottieView source={require('../static/loading.json')} autoPlay loop resizeMode={'cover'} />
  	</View>
  );	 	
}

const styles = StyleSheet.create({
	container: {
		height: 50,
		width: '50%',
		alignSelf: 'center'
	}
});

export default ActivityIndicator;