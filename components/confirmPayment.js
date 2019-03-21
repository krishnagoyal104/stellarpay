import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Font from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';

class ConfirmPaymentView extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			amount: '',
			color: '#C7C7CD'
		}

	}

	onAmountChange = (val) => {
		this.setState(({
			amount: val 
		}));
	}

  render(){
		return(
			<View style={styles.mainContainer}>
				<View style={styles.containerTop}>
					<Text style={styles.text}>Name</Text>
				</View>
				<View style={styles.containerBottom}>
					<View style={styles.inputIcons}>
						<Icon name={'triangle-right'} size={20} color={'#007ee5'} style={{paddingTop: 16}} />
						<TextInput style={styles.textInput} placeholder={'Enter Amount'} selectionColor={'#007ee5'}
						autoFocus={true}
			  		onChangeText={val => this.onAmountChange(val)}
						underlineColorAndroid={this.state.color}  
						onFocus={() => this.setState({color: '#007ee5'})}
						onBlur={() => this.setState({color: '#C7C7CD'})}
						/>
				  </View>
				  <Text style={{fontSize: 16}}>Money will be sent to Name.</Text>
					<TouchableOpacity style={styles.loginContainer} >
		  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
							<Text style={styles.login}>Pay</Text>
							<Font name={'send'} size={20} color={'white'} style={{paddingTop: 4, paddingLeft: 6}} />
						</View>
					</TouchableOpacity>
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
		flex: 3,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold'
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
	loginContainer: {
		height: 40,
		width: '85%',
		marginTop: 6,
		backgroundColor: '#007ee5',
		alignItems: 'center',
		justifyContent: 'center'
	},
	login: {
		color: 'white',
		fontSize: 20
	}
});

export default ConfirmPaymentView;