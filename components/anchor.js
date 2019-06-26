import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { Formik } from 'formik';
import * as yup from 'yup';
import AssetView from './asset';

const AnchorView = (props) => {
  return( 
    <View style={styles.mainContainer}>
      <Formik
      initialValues={{url: ''}}
      onSubmit={({url}) => props.fetchAssets(url)}
      validationSchema={yup.object().shape({
        url: yup
          .string()
          .required()
      })}
      >
        {formikProps => (
          <View style={styles.topContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Icon name={"globe"} size={25} color={"#007ee5"} />
              </View>
              <TextInput style={styles.input1} value={formikProps.values.url}
              placeholder={'Enter Url'} selectionColor={'#007ee5'}
              onChangeText={formikProps.handleChange('url')}
              autoFocus={true} autoCapitalize={'none'} />
            </View>
            {
              formikProps.touched.url && formikProps.errors.url &&
              <Text style={styles.error}>{formikProps.errors.url}</Text>
            }
            {props.loading ? <ActivityIndicator size="small" color="#007ee5" /> :
              <TouchableOpacity style={styles.button} onPress={formikProps.handleSubmit}>
                <Text style={styles.buttonText}>Fetch assets</Text>
              </TouchableOpacity>}
          </View>
        )}
      </Formik>
      <View style={styles.bottomContainer}>
        <AssetView assets={props.assets} navigate={props.navigate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  topContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 3
  },
  inputContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow: 'hidden'
  },
  iconContainer: {
    width: '10%'
  },
  input1: {
    height: 50,
    width: '90%',
    fontSize: 22,
    borderBottomWidth: 2,
    borderBottomColor: '#007ee5',
  },
  input2: {
    height: 50,
    width: '40%',
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#007ee5'
  },
  button: {
    height: 50,
    width: '90%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007ee5',
  },
  buttonText: {
    fontSize: 22,
    color: 'white'
  },
  error: {
    fontSize: 16,
    color: 'red'
  }
});



export default AnchorView;