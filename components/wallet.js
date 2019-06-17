import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import WalletItem from './walletItem';

const WalletView = (props) => {
	const ListEmptyComponent =
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Add Lumens on the testnet.</Text>
    		<TouchableOpacity style={styles.button} onPress={props.fundUserAccount}>
    			<Text style={styles.buttonText}>Add balance</Text>		
    		</TouchableOpacity>
        </View>
    </View>
  return(
    <FlatList
    onRefresh={() => props.refresh()}
    refreshing={props.loading}
  	data={props.balances}
  	keyExtractor={(item, index) => index.toString()}
  	renderItem={({item}) => <WalletItem {...item} />}
  	ListEmptyComponent={!props.loading && ListEmptyComponent}
		contentContainerStyle={[{ flexGrow: 1 }, props.balances.length ? null : { alignItems: 'center'} ]}
	/>
  );		
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: 100,
    width: 200,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'black'
  },
  button: {
    height: 40,
    width: 160,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007ee5'
  },
  buttonText: {
    fontSize: 16,
    color: 'white'
  }
});

export default WalletView;