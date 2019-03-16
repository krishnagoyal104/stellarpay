import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';   
import ReceiveView from '../components/receive';

class ReceiveScreen extends React.Component {

	static options(passProps){
		return{
			topBar: {
				background: {
					color: '#007ee5'
				},
				title: {
					text: 'Receive',
					alignment: 'center',
					color: 'white'
				}
			}
		}
	}	

  constructor(props){
    super(props);
  }

  render() {

    return (
      <ReceiveView publicKey={this.props.publicKey} />
    );  
  }

}  
  
export default ReceiveScreen;
