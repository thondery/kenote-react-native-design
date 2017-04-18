import { StyleSheet, Dimensions, Platform } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
  },
  buttonStyle: {
    marginTop: 10
  },
  buttonTextStyle: {
    fontSize: 18,
    color: '#fff',
  },
  disableLayer: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: width, 
    height: height, 
    backgroundColor: '#666', 
    opacity: 0
  },
  inputViewStyle: {
    backgroundColor: 'transparent'
  }
})