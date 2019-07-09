import React from 'react';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import InitializeView from '../components/initialize';
import {fetchKeypair} from '../actions/account';
import {getUser} from '../actions/user';
import {getStreamForAccount} from '../actions/balance';
import {goToIntroScreens, goToHome} from '../App';

class InitializeScreen extends React.Component {

  constructor(props){
    super(props);
  }

  async componentDidMount(){
    try{
      const token = await AsyncStorage.getItem('token');
      if(token){
        goToHome();
        await this.props.dispatch(fetchKeypair());
        this.props.dispatch(getUser());
        this.props.dispatch(getStreamForAccount());
      }
      else{
       goToIntroScreens();
      }
      SplashScreen.hide();
    }
    catch(e){
      console.log(e);
    }
  }

  render() {

    return (
      <InitializeView />
    );  
  }

}  
  
export default connect()(InitializeScreen);

