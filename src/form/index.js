import React, { Component, PropTypes } from 'react'
import { 
  View, 
  Text,
  TextInput 
} from 'react-native'
import Spinner from 'react-native-spinkit'
import FormInput from '../formInput'
import Button from '../button'
import styles, { width, height } from './style'

const initItem = {
  type: 'forminput',
  name: '',
  label: undefined,
  labelIcon: undefined,
  labelColor: '#666',
  password: false,
  placeholder: '',
  placeholderColor: '#ccc',
  keyboardType: 'default',  // enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search')
  returnKeyType: 'default',  // enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
}

export default class Form extends Component {

  static propTypes = {
    style: View.propTypes.style,
    options: PropTypes.array,
    buttonLabel: PropTypes.string,
    buttonPress: PropTypes.func,
    disable: PropTypes.bool,
    inputViewStyle: View.propTypes.style,
    textInputStyle: View.propTypes.style,
    formWidth: PropTypes.number,
    buttonStyle: View.propTypes.style,
    buttonDisabledStyle: View.propTypes.style,
    marginWidth: PropTypes.number,
    children: PropTypes.element,
    pending: PropTypes.bool
  }

  static defaultProps = {
    style: null,
    options: [],
    buttonLabel: 'Submit',
    buttonPress: () => null,
    disable: false,
    inputViewStyle: null,
    textInputStyle: null,
    formWidth: width,
    buttonStyle: null,
    buttonDisabledStyle: null,
    marginWidth: 15,
    children: null,
    pending: false
  }

  constructor (props) {
    super(props)
    this.state = {
      body: {},
      disabled: true
    }
  }

  render () {
    const { 
      style, 
      options, 
      buttonLabel, 
      buttonPress, 
      disable, 
      inputViewStyle,
      textInputStyle,
      formWidth,
      buttonStyle,
      buttonDisabledStyle,
      marginWidth,
      children,
      pending
    } = this.props
    const optsMap = this.getOptionsMap()
    return (
      <View style={[styles.container, style, { width: formWidth - marginWidth * 2 }]}>
        <View style={[styles.inputViewStyle, inputViewStyle]}>
        {options.map( (item, i) => {
          let itemData = { ...initItem, ...item }
          switch (item.type) {
            case 'forminput': {
              return (
                <FormInput key={i}
                  style={textInputStyle}
                  formWidth={formWidth}
                  marginWidth={marginWidth}
                  ref={itemData.name}
                  textInputRef={itemData.name}
                  labelText={itemData.label}
                  labelIcon={itemData.labelIcon}
                  labelColor={itemData.labelColor}
                  suffixIcon={itemData.suffixIcon}
                  suffixIconHandle={itemData.suffixIconHandle}
                  password={itemData.password} 
                  placeholder={itemData.placeholder}
                  placeholderColor={itemData.placeholderColor}
                  keyboardType={itemData.keyboardType}
                  returnKeyType={itemData.returnKeyType}
                  onChangeText={this.onChangeTextHandle.bind(this, itemData.name)}
                  onSubmitEditing={this.onSubmitEditingHandle.bind(this, {key: i, type: itemData.returnKeyType})}
                  />
              )
            }
            default:
              break
          }
        })}
        </View>
        <Button 
          style={[styles.buttonStyle, buttonStyle, { width: width - marginWidth * 2 }]}
          //label={buttonLabel}
          //labelStyle={styles.buttonTextStyle}
          onPress={this.onPressHandle.bind(this)}
          disabled={optsMap.length > 0 ? this.state.disabled : false}
          disabledStyle={buttonDisabledStyle} >
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }} >
            {pending ? (
              <Spinner
                style={{ marginRight: 15 }}
                type={'Circle'} 
                color={'#cccccc'} 
                size={18} />
            ) : null}
            <Text style={[styles.buttonTextStyle]} >{buttonLabel}</Text>
          </View>
        </Button>
        {children}
        {pending ? 
          <View style={styles.disableLayer} />
        : null}
      </View>
    )
  }

  onChangeTextHandle (key, val) {
    let { body } = this.state
    let temp = {}
    temp[key] = val
    body = { ...body, ...temp }
    const optsMap = this.getOptionsMap()
    let disabled = true
    for (let e of optsMap) {
      let isHas = _.has(body, e)
      if (!(isHas && body[e].length > 0)) {
        disabled = false
      }
    }
    this.setState({ body, disabled: !disabled })
  }

  getOptionsMap () {
    const { options } = this.props
    return _.map(_.filter(options, { isRequired: true }), 'name')
  }

  onPressHandle () {
    let { body } = this.state
    this.props.buttonPress(body)
  }

  getBody () {
    return this.state.body
  }

  onSubmitEditingHandle (evt) {
    let { options } = this.props
    switch (evt.type) {
      case 'next':
        if (evt.key >= options.length) return
        let name = options[evt.key + 1].name
        this.refs[name].refs[name].focus()
        break
      case 'default':
        this.onPressHandle()
        break
      default:
        break
    }
  }

}