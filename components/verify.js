import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class VerificationView extends React.Component{

	constructor(props){
		super(props);
    this.inputs = {};
    this.state = {
    	otp: []
    }
	}

	focusNextField = (key, val) => {
		var otp = this.state.otp;
		otp.splice(key-1, 0, val);
		this.setState(({
			otp: otp
		}));
		if(key>5) return;
    this.inputs[key+1].focus();
  }

  focusPreviousField = (key, val) => {
  	var otp = this.state.otp;
  	delete otp[key-1];
  	this.setState(({
  		otp: otp
  	}));
  	if(key<2) return;
  	this.inputs[key-1].focus();
  }

	render(){
		const renderInputs = () => {
			const inputs = [];
			for(let i=1; i<=6; i++){
				inputs.push(
					<TextInput
					ref={(input) => this.inputs[i] = input}
					blurOnSubmit={ false }
					maxLength={1}
					style={styles.input}
					onChangeText={(val) => {
						if(val.length===0){
							this.focusPreviousField(i, val);
						}
						else{
							this.focusNextField(i, val);
						}
          }} />
				)
			}
			return inputs;
		}
		return(	
		 	<View style={styles.mainContainer}>
		 		<View style={styles.container}>
		 			{renderInputs()}
		 		</View>
		 		<View style={styles.bottomContainer}>
		 			<Text>{this.state.otp}</Text>
		 		</View>
		 	</View>
	  );
	}

}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'flex-end'
	},
	input: {
		width: '10%',
		height: 55,
		fontSize: 30,
		borderBottomWidth: 2,
		borderBottomColor: '#007ee5'
	},
	bottomContainer: {
		flex: 2
	}
});



export default VerificationView;