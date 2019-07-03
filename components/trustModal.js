import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import Modal from "react-native-modal";
import {Formik} from 'formik';
import * as yup from 'yup';

const TrustModalView = (props) => {

		return(

			<View>
	      <Modal isVisible={props.isVisible}
	      onBackButtonPress={() => props.close()}>
		      <Formik
		      initialValues={{amount: ''}}
		      onSubmit={({amount}) => props.createTrust(amount)}
		      validationSchema={yup.object().shape({
		        amount: yup
		          .number()
		          .required()
		      })}
		      >
		      	{formikProps => (
				      <View style={styles.modal}>
			      		<View style={styles.containerTop}>
				        	<Text style={styles.text}>Please enter the amount for which to create trust:</Text>
					        <TextInput placeholder={'Enter Limit'} value={formikProps.values.amount} style={styles.input}
					        onChangeText={formikProps.handleChange('amount')}
					        keyboardType={'numeric'} />
					        {
			              formikProps.touched.amount && formikProps.errors.amount &&
			              <Text style={styles.error}>{formikProps.errors.amount}</Text>
			            }
					      </View>
				        <View style={styles.containerBottom}>
					        <TouchableOpacity style={styles.button} onPress={formikProps.handleSubmit} >
				        		<Text style={styles.buttonText}>Proceed</Text>
				        	</TouchableOpacity>
			        	</View>
			        </View>
		       	)}
		      </Formik>
 				</Modal>
		</View>

		);

}

const styles = StyleSheet.create({
	modal: {
		height: Dimensions.get('window').height * 3/10,
		width: '85%',
		padding: 12,
		alignSelf: 'center',
		backgroundColor: 'white'
	},
	containerTop: {
		height: '60%',
		justifyContent: 'space-around'
	},
	containerBottom: {
		height: '40%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	text: {
		fontSize: 18,
		color: 'black'
	},
	input: {
		width: '80%',
		borderBottomWidth: 2,
		borderBottomColor: '#007ee5',
		fontSize: 20
	},
	button: {
		height: 50,
		width: '100%',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#007ee5'
	},
	buttonText: {
		fontSize: 20,
		color: 'white'
	},
	error: {
		fontSize: 16,
		color: 'red'
	}
});

export default TrustModalView;