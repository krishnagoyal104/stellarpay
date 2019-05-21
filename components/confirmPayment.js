import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Picker, ActivityIndicator} from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';

class ConfirmPaymentView extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			amount: '',
			color: '#C7C7CD',
			asset: 'Lumens',
			index: this.props.assets.length-1
		}

	}

	onAmountChange = (val) => {
		this.setState(({
			amount: val 
		}));
	}

	makePayment = () => {
		const {asset_code, asset_issuer} = this.props.assets[this.state.index];
		this.props.pay(this.state.amount, asset_code, asset_issuer);
	}

  render(){
  	const renderItems = () => {
  		return this.props.assets.map((asset, index) => {
				const item = asset.asset_type === 'native' ? 'Lumens' : asset.asset_code;
				return <Picker.Item label={item} key={index} value={item} />
			});
		}	
		return(
			<View style={styles.mainContainer}>
				<View style={styles.containerTop}>
					<Text style={styles.text}>{this.props.name}</Text>
				</View>
				<View style={styles.containerBottom}>
					<View style={styles.picker}>
						<Picker
						  selectedValue={this.state.asset}
						  style={{height: 50, width: '100%'}}
						  onValueChange={(itemValue, itemIndex) => {
						    this.setState(({asset: itemValue, index: itemIndex}))
						  }}>
						  {renderItems()}
						</Picker>
					</View>
					<View style={styles.inputIcons}>
						<Icon name={'triangle-right'} size={20} color={'#007ee5'} style={{paddingTop: 16}} />
						<TextInput style={styles.textInput} placeholder={'Enter Amount'} selectionColor={'#007ee5'}
						autoFocus={true}
						keyboardType={"numeric"}
			  		onChangeText={val => this.onAmountChange(val)}
						underlineColorAndroid={this.state.color}  
						onFocus={() => this.setState({color: '#007ee5'})}
						onBlur={() => this.setState({color: '#C7C7CD'})}
						/>
				  </View>
				  <View style={styles.balance}>
				  	<View style={styles.walletIcon}>
				  		<Icon name={"wallet"} size={30} />
				  	</View>
				  	<View>
					  	<Text style={{fontSize: 18, color: 'black'}}>Wallet balance</Text>
					  	<Text style={{fontSize: 14, color: 'black'}}>{this.state.asset}</Text>
				  	</View>
				  	<Text style={{fontSize: 20, color: 'black'}}>{this.props.assets[this.state.index].balance.slice(0, -8)}</Text>
				  </View>
				  {this.props.loading ? <ActivityIndicator size="small" color="#007ee5" /> :
					(<TouchableOpacity style={styles.payContainer} onPress={this.makePayment} >
		  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
							<Text style={styles.pay}>Pay</Text>
							<Font name={'send'} size={20} color={'white'} style={{paddingTop: 4, paddingLeft: 6}} />
						</View>
					</TouchableOpacity>)
				}
				</View> 
	    </View>   
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	containerTop: {
		flex: 1,
		padding: 30
	},
	containerBottom: {
		flex: 5,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	picker: {
		width: '85%',
		padding: 5,
		borderRadius: 16,
		elevation: 2
	},
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'black'
	},
	textInput: {
		height: 50,
		width: '85%',
		fontSize: 26
	},
	inputIcons: {		
	  justifyContent: 'flex-start',
	  flexDirection: 'row'
	},
	balance: {
		height: '25%',
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderRadius: 20,
		elevation: 2
	},
	walletIcon: {
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		elevation: 1,
		backgroundColor: '#99D3EC'
	},
	payContainer: {
		height: '12%',
		width: '85%',
		marginTop: 6,
		backgroundColor: '#007ee5',
		alignItems: 'center',
		justifyContent: 'center'
	},
	pay: {
		color: 'white',
		fontSize: 20
	}
});

export default ConfirmPaymentView;