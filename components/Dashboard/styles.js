import { StyleSheet } from 'react-native'
import {
    Colors
  } from 'react-native/Libraries/NewAppScreen'; 

export const styles = StyleSheet.create({
    mainView: {
      paddingTop: 10,
      backgroundColor: '#2E3440',
      display: 'flex',
      height: '100%'
    },
    body: {
      backgroundColor: '#2E3440',
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#4C566A',
      padding: 10,
      margin: 10
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      alignSelf: 'center',
      textAlign: 'center',
      color: '#D8DEE9',
      textDecorationLine: 'underline'  
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: '#D8DEE9',
    },
    highlight: {
      fontWeight: '700',
    },
    imageContainer: {
      display: 'flex',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    stretch: {
      height: 150,
      width: 150,
      resizeMode: 'stretch'
    },


    headerContainer: {
        height: '20%',
        backgroundColor: '#3B4252',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
    },
    headerTitleText: {
        fontSize: 20, 
        fontWeight: '400',
        textTransform: 'uppercase',
        color: '#D8DEE9' 
    }
  });