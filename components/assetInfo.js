import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome5';
import TrustModalView from './trustModal';
import ActivityIndicator from './activityIndicator';

class AssetInfoView extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      modal: false
    }
  }

  changeModalState = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal
    }));
  }

  createTrust = (limit) => {
    this.changeModalState();
    this.props.createTrust(limit);
  }

  renderList = () => {
    const keys = Object.keys(this.props.asset);
    return keys.map((key, index) =>  {
      return (
        <View style={styles.container} key={index}>
          <View style={styles.leftContainer}>
            <Text style={styles.text}>{key}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.text}>{this.props.asset[key]}</Text>
          </View>
        </View>
      );
    });
  }

  render(){
    return(
      <View style={styles.mainContainer}>
        <ScrollView>{this.renderList()}</ScrollView>
        <TrustModalView isVisible={this.state.modal} close={this.changeModalState}
        createTrust={this.createTrust} />
        {
          this.props.loading ? <ActivityIndicator /> :
          <TouchableOpacity style={styles.button} onPress={() => this.changeModalState()}>
            <Text style={styles.buttonText}>Create Trust</Text>
            <Font name={'link'} size={20} color={'#007ee5'} style={styles.icon} />
          </TouchableOpacity>
        }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 8
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.2
  },
  leftContainer: {
    flex: 1,
    padding: 5
  },
  rightContainer: {
    flex: 2,
    padding: 5,
  },
  text: {
    fontSize: 14,
    color: 'black'
  },
  button: {
    height: 50,
    width: '60%',
    marginBottom: 16,
    borderRadius: 6,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2
  },
  buttonText: {
    fontSize: 20,
    color: '#007ee5'
  },
  icon: {
    marginLeft: 8
  }
});



export default AssetInfoView;