import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import PassbookItemView from './passbookItem';
import ListEmptyComponent from './listEmptyComponent';
import Icon from 'react-native-vector-icons/Ionicons';

const PassbookView = (props) => {
	const footer = 
		<TouchableOpacity style={styles.footer} onPress={() => props.fetchTransactions(props.ledger[props.ledger.length-1].pagingToken, 'desc')} >
			<Text style={styles.text}>{props.loading ? 'Loading...' : 'Load more transactions'}</Text>
			<Icon name={"md-cloud-download"} size={40} color={'#007ee5'} />	
		</TouchableOpacity>
  return(
	  	<FlatList
			data={props.ledger}
			onRefresh={() => {
				props.ledger.length ?	props.fetchTransactions(props.ledger[0].pagingToken, 'asc') :
				props.fetchTransactions();
			}}
			refreshing={props.loading}
			keyExtractor={item => item.id}
			renderItem={({item}) => <PassbookItemView {...item} />}
			ListEmptyComponent={!props.loading && ListEmptyComponent}
			ListFooterComponent={props.ledger.length >= 10 && footer}
			contentContainerStyle={[{ flexGrow: 1 }, props.ledger.length ? null : { alignItems: 'center'} ]}
			/>
  );	 	
}

const styles = StyleSheet.create({
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