import React, {Fragment } from 'react'
import { ConnectionPrompt } from './ConnectionPrompt'
import { SignRecognition } from './SignRecognition'

import { styles } from './styles'

import { View, Text } from 'react-native'

export const Dashboard = (props) => 
<Fragment>
  <Header />
   {props.connectedToDevice 
   ? <SignRecognition {...props} />
   : <ConnectionPrompt {...props} />
  }
</Fragment>

const Header = () => 
  <View style={styles.headerContainer}>
    <View style={styles.headerTitle}>
      <Text style={styles.headerTitleText} >Traffic Sign and Light Recognition</Text>
    </View>
  </View>
