import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import PassbookItemView from './passbookItem';

const PassbookView = (props) => {
  return(
  	<View>
  		{props.loading ? <ActivityIndicator style={styles.loading} size="small" color="#007ee5" /> :
		  	<FlatList
				data={props.ledger}
				style={styles.container}
				renderItem={({item}) => <PassbookItemView {...item} />}
				/>}
		</View>	
  );	 	
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		width: '80%'
	},
	loading: {
		alignSelf: 'center'
	}
});

export default PassbookView;