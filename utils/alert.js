import {Alert} from 'react-native';

export default (title, message) => {
	Alert.alert(title || 'Network Error', message || 'Please check your internet connection.', [{text: 'OK'}], {cancelable: false});
}