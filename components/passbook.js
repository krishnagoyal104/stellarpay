import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import PassbookItemView from './passbookItem';

const PassbookView = (props) => {
  return(
  	<View style={styles.container}>
  		{props.loading ? 
  			<View style={styles.loadingContainer}>
  				<ActivityIndicator size="large" color="#007ee5" />
  			</View> :
		  	<FlatList
				data={props.ledger}
				onRefresh={() => props.refresh()}
				refreshing={props.loading}
				keyExtractor={item => item.id}
				renderItem={({item}) => <PassbookItemView {...item} />}
				/>}
		</View>	
  );	 	
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default PassbookView;