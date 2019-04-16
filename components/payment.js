import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import Font from 'react-native-vector-icons/FontAwesome';

class PaymentPage extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			color: '#C7C7CD',
			receiver: ''
		}

	}

	onContactChange = (val) => {
		this.setState(({
			receiver: val
		}));
	}

  render(){  
	return(	
		<View style={styles.mainConatiner}>
		  <View style={styles.containerTop}>
			  <View style={styles.inputIcons}>
			  <Icon name={'contacts'} size={26} color={'#007ee5'} style={{paddingTop: 14}} /> 
		  		<TextInput style={styles.textInput} placeholder={'Enter mobile number'} selectionColor={'#007ee5'}
		  		onChangeText={val => this.onContactChange(val)}	
		  		autoFocus={true} 
					underlineColorAndroid={this.state.color}  
					onFocus={() => this.setState({color: '#007ee5'})}
					onBlur={() => this.setState({color: '#C7C7CD'})}
		  		/>
		  	</View>
		  	{this.props.loading ? <ActivityIndicator size="small" color="#007ee5" /> :
	  		(<TouchableOpacity style={styles.loginContainer} onPress={() => this.props.navigate(this.state.receiver)} >
		  			<View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
							<Text style={styles.login}>Proceed</Text>
							<Icon name={'arrowright'} size={20} color={'white'} style={{paddingTop: 4, paddingLeft: 6}} />
						</View>
				 </TouchableOpacity>)
	  		}
	  	  </View>
	  	<View style={styles.containerBottom}></View>
	  </View>  
    );
  }		
}

const styles = StyleSheet.create({
	mainConatiner:{
		flex: 1
	},
	containerTop:{
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	containerBottom:{
		flex: 3,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	textInput: {
		height: 50,
		width: '80%',
		fontSize: 22
	},
	inputIcons: {
		width: '95%',
	  justifyContent: 'flex-start',
	  flexDirection: 'row'
	},
	image: {
		height: 35,
		width: 35
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

export default PaymentPage;