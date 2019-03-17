import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, Dimensions} from 'react-native';
import PassbookItemView from './passbookItem';

const PassbookView = (props) => {
  return(	
  	<View style={styles.container}>
	  	<FlatList
			data={props.ledger}
			renderItem={({item}) => <PassbookItemView recipient={item.to} time={item.time} amount={item.amount} />}
			/>
		</View>		
  );	 	
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		width: '80%'
	}
});

export default PassbookView;