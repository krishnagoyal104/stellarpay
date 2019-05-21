import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, Dimensions} from 'react-native';
import WalletItem from './walletItem';

const WalletView = (props) => {
  return(	
    <FlatList
    onRefresh={() => props.refresh()}
    refreshing={props.loading}
  	data={props.balances}
  	keyExtractor={(item, index) => index.toString()}
  	renderItem={({item}) => <WalletItem {...item} />}
	/>
  );		
}

export default WalletView;