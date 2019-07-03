import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';   
import AssetItemView from '../components/assetItem';

const AssetView = (props) => {

	const ListEmptyComponent =
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>
        	Enter URL of an anchor to display assets issued by it.
        	eg: www.tempo.eu.com
        </Text>
        <Text style={styles.text}>
        	Please note that currently you can create trust with assets only on the testnet.
        </Text>
      </View>
    </View>

  return (
  	<FlatList
  	data={props.assets}
  	keyExtractor={(item, index) => index.toString()}
  	renderItem={({item, index}) => <AssetItemView {...item} index={index} navigate={props.navigate} />}
  	ListEmptyComponent={ListEmptyComponent}
		contentContainerStyle={[{ flexGrow: 1 }, props.assets.length ? null : { alignItems: 'center'} ]}
		/>
  );

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    height: 150,
    width: 300,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'black'
  }
});

export default AssetView;

