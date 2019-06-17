import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';  
import PassbookView from '../components/passbook';
import {getLedger} from '../actions/ledger';

class PassbookScreen extends React.Component {

  constructor(props){
    super(props);
  }

  fetchTransactions = (cursor, order) => {
    this.props.dispatch(getLedger(cursor, order));
  }

  render() {

    return (
      <PassbookView ledger={this.props.ledger} loading={this.props.loading} fetchTransactions={this.fetchTransactions} />
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

