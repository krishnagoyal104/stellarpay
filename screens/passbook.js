import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';   
import PassbookView from '../components/passbook';
import {getLedger} from '../actions/ledger';

class PassbookScreen extends React.Component {

  constructor(props){
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidAppear(){
  	!this.props.ledger.length && this.fetchTransactions();
  }

  fetchTransactions = () => {
    this.props.dispatch(getLedger());
  }

  render() {

    return (
      <PassbookView ledger={this.props.ledger} loading={this.props.loading} refresh={this.fetchTransactions} />
    );  
  }

}

const mapStateToProps = (state) => {
  return{
    loading: state.ui.ledger,
    ledger: state.ledger
  };
};  
  
export default connect(mapStateToProps)(PassbookScreen);

