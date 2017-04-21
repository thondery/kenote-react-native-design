import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  TextInput 
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../button'
import styles, { width, height } from './style'

export default class FormInput extends Component {

  static propTypes = {
    style: View.propTypes.style,
    textInputRef: PropTypes.string,
    textInputStyle: TextInput.propTypes.style,
    labelText: PropTypes.string,
    labelIcon: PropTypes.string,
    labelColor: PropTypes.string,
    password: PropTypes.bool,
    placeholder: PropTypes.string,
    placeholderColor: PropTypes.string,
    returnKeyType: PropTypes.string,
    keyboardType: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChangeText: PropTypes.func,
    onKeyPress: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    formWidth: PropTypes.number,
    marginWidth: PropTypes.number
  }

  static defaultProps = {
    style: null,
    textInputRef: '',
    textInputStyle: null,
    labelText: undefined,
    labelIcon: undefined,
    labelColor: '#666',
    password: false,
    placeholder: '',
    placeholderColor: '#ccc',
    returnKeyType: 'default',
    keyboardType: 'default',
    autoFocus: false,
    onChangeText: () => null,
    onKeyPress: () => null,
    onSubmitEditing: () => null,
    formWidth: width,
    marginWidth: 15
  }

  constructor (props) {
    super(props)
    this.state = {
      showPassword: false
    }
  }

  focus() {
    const ref = this.props.textInputRef
    this.refs[ref].focus()
  }

  blur() {
    const ref = this.props.textInputRef
    this.refs[ref].blur()
  }

  render () {
    const { 
      style,
      textInputRef,
      textInputStyle,
      labelText,
      labelIcon,
      labelColor,
      password,
      placeholder,
      placeholderColor,
      returnKeyType,
      keyboardType,
      autoFocus,
      onChangeText,
      onKeyPress,
      onSubmitEditing,
      formWidth,
      marginWidth
    } = this.props
    const passwordIconWidth =  password ? 40 : 0
    const labelCompentent = {
      ['text']: {
        elelment: <Text style={[styles.labelTextStyle, { color: labelColor }]} numberOfLines={1}>{labelText}</Text>,
        width: 80,
      },
      ['icon']: {
        elelment: <Icon name={labelIcon || 'home'} size={24} color={labelColor} />,
        width: 40
      },
      ['none']: {
        width: 0
      }
    }
    let labelType = labelText ? 'text' : 'none'
    labelType = labelIcon ? 'icon' : labelType
    return (
      <View style={[styles.container, style]}>
        {this.labelViewComponent(labelCompentent, labelType)}
        <TextInput ref={textInputRef}
          style={[styles.textInputStyle, textInputStyle, {
            width: formWidth - labelCompentent[labelType].width - marginWidth * 2 - passwordIconWidth
          }]}
          autoCapitalize={'none'}
          underlineColorAndroid={'transparent'}
          password={password && !this.state.showPassword}
          secureTextEntry={password && !this.state.showPassword}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing} />
        {this.passwordEyeComponent(labelCompentent)}
      </View>
    )
  }

  labelViewComponent (labelCompentent, labelType) {
    return labelType !== 'none' ? (
      <View style={[styles.labelViewStyle, { width: labelCompentent[labelType].width }]}>
        {labelCompentent[labelType].elelment}
      </View>
    ) : null
  }

  passwordEyeComponent (labelCompentent) {
    const { labelColor, password } = this.props
    return password ? (
      <View style={[styles.labelViewStyle, { width: labelCompentent['icon'].width, paddingRight: 10 }]}>
        <Button 
          style={{ backgroundColor: 'transparent', paddingLeft: 0, paddingRight: 0, width: 40 }}
          onPress={this.showPasswordHandle.bind(this)} >
          <Icon name={this.state.showPassword ? 'eye' : 'eye-slash'} size={24} color={labelColor} />
        </Button>
      </View>
    ) : null
  }

  showPasswordHandle () {
    const { showPassword } = this.state
    this.setState({ showPassword: !showPassword })
  }
}