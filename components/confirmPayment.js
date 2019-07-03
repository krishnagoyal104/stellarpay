import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Picker} from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import { Formik } from 'formik';
import * as yup from 'yup';
import PaymentModal from './paymentModal';
import ButtonView from './button';
import ActivityIndicator from './activityIndicator';

class ConfirmPaymentView extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			amount: '',
			color: '#C7C7CD',
			asset: 'Lumens',
			index: this.props.assets.length-1,
			modal: false
		}

	}

	onAmountChange = (val) => { 
    this.setState(({ 
      amount: val  
    })); 
  }

	changeModalState = () => {
		this.setState((prevState) => ({ 
			modal: !prevState.modal
		}));
	}

	makePayment = () => {
		const {asset_code, asset_issuer} = this.props.assets[this.state.index];
		this.props.pay(this.state.amount, asset_code, asset_issuer, this.changeModalState);
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
					<Text style={styles.text1}>{this.props.name.toUpperCase()}</Text>
					<Text style={styles.text2}>Wallet linked to {this.props.number}</Text>
				</View>
				<Formik
			    initialValues={{amount: ''}}
			    onSubmit={(values) => {
			    	this.onAmountChange(values.amount);
			    	this.changeModalState();
			    }}
			    validationSchema={yup.object().shape({
		        amount: yup
		          .number()
		          .max(10000)
		          .required()
		      })}
				  >
				  {props => (
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
								value={props.values.amount}
								keyboardType={"numeric"}
					  		onChangeText={props.handleChange('amount')}
								underlineColorAndroid={this.state.color}  
								onFocus={() => this.setState({color: '#007ee5'})}
								onBlur={() => this.setState({color: '#C7C7CD'})}
								/>
						  </View>
						  {props.touched.amount && props.errors.amount &&
            		<Text style={styles.error}>{props.errors.amount}</Text>
            	}
						  <View style={styles.balance}>
						  	<View style={styles.walletIcon}>
						  		<Icon name={"wallet"} size={30} />
						  	</View>
						  	<View>
							  	<Text style={{fontSize: 18, color: 'black'}}>Wallet balance</Text>
							  	<Text style={{fontSize: 14, color: 'black'}}>{this.state.asset}</Text>
						  	</View>
						  	<Text style={{fontSize: 20, color: 'black'}}>{this.props.assets.length && this.props.assets[this.state.index].balance.slice(0, -8)}</Text>
						  </View>
							{this.props.loading ? <ActivityIndicator /> :
							<ButtonView name={'Pay'} handler={props.handleSubmit} />}
						</View>
					)}	
				</Formik>	
				<View>
					<PaymentModal isVisible={this.state.modal}
					name={this.props.name} amount={this.state.amount} asset={this.state.asset}
					number={this.props.number} loading={this.props.loading}
					makePayment={this.makePayment}
					closeModal={this.changeModalState} />
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
	text1: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black'
	},
	text2: {
		fontSize: 16,
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
	error: {
		fontSize: 16,
		color: 'red'
	}
});

export default ConfirmPaymentView;