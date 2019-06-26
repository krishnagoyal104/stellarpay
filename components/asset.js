import React from 'react';
import {StyleSheet, FlatList} from 'react-native';   
import AssetItemView from '../components/assetItem';

const AssetView = (props) => {

  return (
  	<FlatList
  	data={props.assets}
  	keyExtractor={(item, index) => index.toString()}
  	renderItem={({item, index}) => <AssetItemView {...item} index={index} navigate={props.navigate} />}
		/>
  );

}  

export default AssetView;

