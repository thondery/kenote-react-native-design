import React, { Component, PropTypes } from 'react'
import {
  View, 
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style'

export default class Button extends Component {

  static propTypes = {
    style: View.propTypes.style,
    label: PropTypes.string,
    labelStyle: Text.propTypes.style,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
    children: PropTypes.element,
    disabled: PropTypes.bool,
    disabledStyle: View.propTypes.style,
    onPress: PropTypes.func
  }

  static defaultProps = {
    style: {},
    label: undefined,
    labelStyle: {},
    icon: undefined,
    iconColor: '#fff',
    iconSize: 20,
    children: null,
    disabled: false,
    disabledStyle: styles.disabledStyle,
    onPress: () => null
  }

  render () {
    const { 
      style, 
      label, 
      labelStyle, 
      icon, 
      iconColor, 
      iconSize, 
      onPress, 
      children, 
      disabled, 
      disabledStyle 
    } = this.props
    return (
      <TouchableOpacity
        onPress={onPress.bind(this)}
        style={[styles.container, style, disabled && disabledStyle]}
        disabled={disabled} >
        {children ? children : (
          <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            {icon ? (
              <Icon name={icon} 
                size={iconSize} 
                color={iconColor} 
                style={{marginRight: 5}} />
            ) : null}
            <Text style={[styles.labelStyle, labelStyle]} >{label}</Text>
          </View>
        )}
      </TouchableOpacity>
    )
  }
}

export const LeftButton = ({...props}) =>
  <Button
    style={[{ backgroundColor: 'transparent' }, props.style]}
    onPress={props.onPress}>
    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <Icon name={'angle-right'} color={props.color} size={32} style={{ marginRight: 5 }} />
      <Text style={[{ fontSize: 18 }, props.color && { color: props.color }]}>{props.label}</Text>
    </View>
  </Button>

export const RightButton = ({...props}) =>
  <Button
    style={[{ backgroundColor: 'transparent' }, props.style]}
    onPress={props.onPress}>
    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
      <Text style={[{ fontSize: 18 }, props.color && { color: props.color }]}>{props.label}</Text>
      <Icon name={'angle-right'} color={props.color} size={32} style={{ marginLeft: 5 }} />
    </View>
  </Button>