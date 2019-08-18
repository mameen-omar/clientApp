/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState, useEffect} from 'react';
import { checkIfBTEnabled, setListOfAvailableDevices, setupListener} from './helpers'
import BT from 'react-native-bluetooth-serial'      

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions, 
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Dashboard } from './components/Dashboard' 

const App = () => {
  const [availableDevices, setAvailableDevices] = useState([])
  const [BTEnabled, setBTEnabled] = useState(false)
  const [selectedDevice, setSelectedDevice] = useState(null)
  const [connectedToDevice, setConnectedToDevice] = useState(false)
  const [connectButtonTitle, setConnectButtonTitle] = useState(`Not connected - First select an available device..`)
  const [message, setMessage] = useState(`no message`)
  const [input, setInput] = useState(``)
  const [messageImage, setMessageImage] = useState(null)

  useEffect(() => {
    checkIfBTEnabled(setBTEnabled)
    setListOfAvailableDevices(setAvailableDevices)
    setupListener(setConnectedToDevice, setConnectButtonTitle, setMessage, setMessageImage)
  }, [])
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.scrollView}>
        {BTEnabled 
        ? <Dashboard
            availableDevices={availableDevices}
            selectedDevice={selectedDevice}
            setSelectedDevice={setSelectedDevice}
            connectedToDevice={connectedToDevice}
            setConnectedToDevice={setConnectedToDevice}
            connectButtonTitle={connectButtonTitle}
            setConnectButtonTitle={setConnectButtonTitle}
            message={message}
            input={input}
            setInput={setInput}
            messageImage={messageImage}
            />
        : <Text style={styles.sectionTitle}>BT is not enabled</Text>}
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#2E3440', 
  },
  body: {
    backgroundColor: '#2E3440',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
