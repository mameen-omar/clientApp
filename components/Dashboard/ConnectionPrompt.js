import React from 'react'
import { connectToSelectedDevice } from '../../helpers'


import { styles } from './styles' 

import {
  View,
  Text,
  TouchableOpacity, 
} from 'react-native';


export const ConnectionPrompt = (props) => 
  <View
    contentInsetAdjustmentBehavior="automatic"
    style={styles.mainView}>

      <View style={styles.body}>  
        <Text style={styles.sectionTitle}>Selected Device: </Text>
        <Text style={styles.sectionTitle}>{props.selectedDevice ? props.selectedDevice.name : `No Device selected`}</Text>
        <AvailableDevicesList
         {...props}
        /> 
        <ConnectionStatus
          {...props}
        />

      </View>
  </View>

const AvailableDevicesList = (props) =>
<View style={styles.sectionContainer}>
  <Text style={styles.sectionTitle}>Available Devices</Text>  
    {props.availableDevices.map((availableDevice) => 
      <TouchableOpacity style={styles.button} onPress={() => {
        props.setSelectedDevice(availableDevice)
        props.setConnectButtonTitle(`Device selected - Click to connect`)
      }}>
        <Text>{availableDevice.name}</Text>
      </TouchableOpacity>
      )} 
</View>

const ConnectionStatus = (props) => {
  return (  
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Connection Status</Text>  
      <TouchableOpacity disabled={props.connectedToDevice} style={styles.button} onPress={() => {
        connectToSelectedDevice(props) 
      }}> 
        <Text>{props.connectButtonTitle}</Text>
      </TouchableOpacity>
    </View>
  )  
} 
