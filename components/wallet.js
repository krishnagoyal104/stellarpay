import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, Dimensions} from 'react-native';
import WalletItem from './walletItem';

const WalletView = (props) => {
  return(	
    <FlatList
  	data={props.balances}
  	renderItem={({item}) => <WalletItem balance={item.balance} asset_type={item.key} />}
	/>
  );		
}

export default WalletView;