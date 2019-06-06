import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const ScannerView = (props) => {
  return(
    <QRCodeScanner
    cameraProps={{captureAudio: false}}
    cameraStyle={{width: Dimensions.get('window').width*0.6, alignSelf: 'center'}}
    onRead={(e) => props.navigate(e.data)}
    topContent={
    <Text style={styles.open}>
      Scan QRCode
    </Text>}
    bottomContent={
    <TouchableOpacity onPress={() => props.close()}>
      <Text style={styles.close}>Close</Text>
    </TouchableOpacity>}
    />
  );
}

const styles = StyleSheet.create({
  open: {
    fontSize: 12,
    color: '#007ee5'
  },
  close: {
    fontSize: 12,
    color: '#007ee5'
  }
});

export default ScannerView;