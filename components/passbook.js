import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import PassbookItemView from './passbookItem';
import ListEmptyComponent from './listEmptyComponent';
import Icon from 'react-native-vector-icons/Ionicons';

const PassbookView = (props) => {
	const footer = 
		<TouchableOpacity style={styles.footer} onPress={() => props.fetchTransactions(props.ledger[props.ledger.length-1].pagingToken)} >
			<Text style={styles.text}>{props.loading ? 'Loading...' : 'Load more transactions'}</Text>
			<Icon name={"md-cloud-download"} size={40} color={'#007ee5'} />	
		</TouchableOpacity>
  return(
	  	<FlatList
			data={props.ledger}
			onRefresh={() => props.fetchTransactions()}
			refreshing={props.loading}
			keyExtractor={item => item.id}
			renderItem={({item}) => <PassbookItemView {...item} />}
			ListEmptyComponent={!props.loading && ListEmptyComponent}
			ListFooterComponent={props.ledger.length && footer}
			contentContainerStyle={[{ flexGrow: 1 }, props.ledger.length ? null : { alignItems: 'center'} ]}
			/>
  );	 	
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	footer: {
		height: 100,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: '#007ee5'
	}
});

export default PassbookView;