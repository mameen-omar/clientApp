import React from 'react'
import BT from 'react-native-bluetooth-serial'      
import TTS from 'react-native-tts'

import { styles } from './styles'

import {
  View,
  Text,
  TouchableOpacity, 
  TextInput,
  Image 
} from 'react-native'

const Images = {
    stopSign: require('../../assets/images/Stop_sign(standard).png'),
    yieldSign: require('../../assets/images/yield.png'),
    fortySign: require('../../assets/images/speed.png'),
    redLight: require('../../assets/images/red.svg.png'),
    yellowLight: require('../../assets/images/yello2.png'),
    greenLight: require('../../assets/images/green.svg.png') 
  }  

export const SignRecognition = (props) =>
  <View
    contentInsetAdjustmentBehavior="automatic"
    style={styles.mainView}>

      <View style={styles.body}>  
        <Messages {...props} />
        <Input {...props} />
      </View>

  </View>

const Messages = (props) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionDescription}> All messages go here </Text>
      <Text style={styles.sectionDescription}>{props.message}</Text> 
      <View style={styles.imageContainer}>
        <Image style={styles.stretch} source={Images[props.messageImage]} />
      </View>
    </View>
  ) 
}

const Input = (props) =>
  props.connectedToDevice &&   
  <View style={styles.sectionContainer}>
    <TextInput
     onChangeText={(value) => props.setInput(value)}
     value={props.input} />
     <TouchableOpacity style={styles.button} onPress={() => {
        BT.write(`${props.input}\r`) 
      }}> 
        <Text>SEND</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { 
        props.setConnectButtonTitle('Not connected - Please select an available device...')
        props.setConnectedToDevice(false)
        TTS.speak('Disconnected from the server')
      }}>    
        <Text>RESET</Text>
      </TouchableOpacity>
  </View>
