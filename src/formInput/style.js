import { StyleSheet, Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#ccc',
    flexDirection: 'row',
  },
  textInputStyle: {
    height: 50,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10
  },
  labelViewStyle: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  labelTextStyle: {
    fontSize: 16
  }
})