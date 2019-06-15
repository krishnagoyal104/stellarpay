import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import PassbookItemView from './passbookItem';
import ListEmptyComponent from './listEmptyComponent';

const PassbookView = (props) => {
  return(
  	<View style={styles.container}>
  		{props.loading ? 
  			<ActivityIndicator size="large" color="#007ee5" /> :
  			props.ledger.length ?
			  	<FlatList
					data={props.ledger}
					onRefresh={() => props.refresh()}
					refreshing={props.loading}
					keyExtractor={item => item.id}
					renderItem={({item}) => <PassbookItemView {...item} />}
					/> : <ListEmptyComponent />
				}
		</View>	
  );	 	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default PassbookView;