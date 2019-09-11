import BT from 'react-native-bluetooth-serial'      
import Messages from './Messages.json'
import TTS from 'react-native-tts'

export const checkIfBTEnabled = (setBTEnabled) => {
    BT.isEnabled().then((enabled) => {
        setBTEnabled(enabled)
    })
    .catch((error) => {
        console.error(`Something went wrong ${error}`)
    })
}

export const setListOfAvailableDevices = (setAvailableDevices) => {
    BT.list().then((availableDevices) => {
        setAvailableDevices(availableDevices)
    })
    .catch((error) => {
        console.error(`Something went wrong ${error}`)
    })
}

export const connectToSelectedDevice = (props) => {
    if (props.selectedDevice) {  
        props.setConnectButtonTitle(`connecting...`)
        TTS.setDefaultRate(1);
        BT.connect(props.selectedDevice.id).then((res) => {
          if ( res ) {
              performHandshake()
              props.setConnectedToDevice(true)
          }
        })   
        .catch((err) => {
          props.setConnectButtonTitle(err.message)
          TTS.speak(err.message)
        })
      } 
}

export const setupListener = (setConnectedToDevice, setConnectButtonTitle, setMessage, setMessageImage) => {
    BT.withDelimiter('\r').then(() => {
        BT.on('read', data => {
            setMessage(data.data)
          if (data.data === '00000001\r'){ 
              setConnectButtonTitle('CONNECTED')
              setConnectedToDevice(true)
              TTS.speak('Connected to server')
          } else if (data.data === '00000011\r') {
              setConnectButtonTitle('Not connected - Please select an available device...')
              setConnectedToDevice(false)
              TTS.speak('Disconnected from the server')
          } else if (data.data.length > 1) {
            processMessage(data.data, setMessage, setMessageImage)
          }
        })
    })
}

const performHandshake = () => {
    BT.write(`00100001\r`)
}

const processMessage = (encoding, setMessage, setMessageImage) => {
    const messageObject = Messages.find((message) => 
      message.encoding.trim() === encoding.trim()
    )
    if (messageObject) {
      setMessage(messageObject.voiceMessage)
      setMessageImage(messageObject.image)
      TTS.stop()
      TTS.speak(`${messageObject.voiceMessage}`)
    } 
}
