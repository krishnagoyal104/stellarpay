import React from 'react';
import {View, StyleSheet} from 'react-native'; 
import ImportAccountView from '../components/importAccount';

class ImportAccountScreen extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <ImportAccountView />
    );  
  }

}    

export default ImportAccountScreen;

