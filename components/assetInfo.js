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
          <Text style={styles.key}>{key}:</Text>
          <Text style={styles.value}>{this.props.asset[key]}</Text>
        </View>
      );
    });
  }

  render(){
    return(
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.text}>About {this.props.asset.code} :</Text>
          <ScrollView style={styles.scrollView}>{this.renderList()}</ScrollView>
        </View>
        <TrustModalView isVisible={this.state.modal} close={this.changeModalState}
        createTrust={this.createTrust} />
        <View style={styles.bottomContainer}>
          {
            this.props.loading ? <ActivityIndicator /> :
            <TouchableOpacity style={styles.button} onPress={() => this.changeModalState()}>
              <Text style={styles.buttonText}>Create Trust</Text>
              <Font name={'link'} size={20} color={'#007ee5'} style={styles.icon} />
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 25
  },
  topContainer: {
    flex: 2,
    justifyContent: 'space-around'
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: {
    padding: 12,
    elevation: 2,
    backgroundColor: 'white'
  },
  container: {
    paddingBottom: 8
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20
  },
  key: {
    fontSize: 20,
    color: 'black'
  },
  value: {
    fontSize: 16
  },
  button: {
    height: 50,
    width: '60%',
    marginTop: 50,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    backgroundColor: 'white'
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