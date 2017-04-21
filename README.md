# kenote-react-native-design

一个关于 React Native 的 UI组件库，基于 react 15.4.x 和 react-native 0.42.x

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![Gratipay][licensed-image]][licensed-url]

### 相关依赖

- react-native-spinkit
- react-native-vector-icons

## 安装

#### npm

```bash
npm i --save kenote-react-native-design
```

#### yarn

```bash
yarn add kenote-react-native-design
```

## Button

#### 使用

```jsx
import { Button } from 'kenote-react-native-design'
```

#### 方式一

```jsx
<Button
  style={{ backgroundColor: '#666666' }}
  label={'按钮'}
  labelStyle={{ fontSize: 18, color: '#ffffff' }}
  icon={'home'}
  iconColor={'#ffffff'}
  iconSize={20}
  disabled
  disabledStyle={{ backgroundColor: '#999999' }}
  onPress={() => console.log('点击事件')}
  />
```

#### 方式二

```jsx
<Button
  style={{ backgroundColor: '#666666' }}
  disabled
  disabledStyle={{ backgroundColor: '#999999' }}
  onPress={() => console.log('点击事件')}>
  <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
    <Icon name={'home'} size={20} color={'#ffffff'} />
    <Text style={{ fontSize: 18, color: '#ffffff' }}>
      按钮
    </Text>
  </View>
 </Button>
```


### Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| style         | \<Object\>        | null       | 外观样式，高度默认为 50 |
| label         | \<String\>        | undefined  | 按钮文字 |
| labelStyle    | \<Object\>        | null       | 按钮文字样式 |
| icon          | \<String\>        | undefined  | 图标名称，图标使用了 FontAwesome，具体名称可到官网查询。|
| iconColor     | \<String\>        | '#fff'     | 图标颜色 |
| iconSize      | \<Number\>        | 20         | 图标大小 |
| disabled      | \<Bool\>          | false      | 按钮禁用状态 |
| disabledStyle | \<Object\>        | null       | 按钮禁用样式 |
| onPress       | \<Function\>      | () => null | 按钮点击事件 |
| children      | \<React.element\> | undefined  | 按钮内嵌子元素 |

## LeftButton

#### 使用

```jsx
import { LeftButton } from 'kenote-react-native-design'

<LeftButton
  style={{ backgroundColor: '#666666' }}
  label={'后退'}
  color={'#ffffff'}
  onPress={() => console.log('后退')}
  />
```

### Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| style         | \<Object\>        | null       | 外观样式 |
| label         | \<String\>        | undefined  | 按钮文字 |
| color         | \<String\>        | undefined  | 按钮文字颜色 |
| onPress       | \<Function\>      | () => null | 按钮点击事件 |

## RightButton

#### 使用

```jsx
import { RightButton } from 'kenote-react-native-design'

<RightButton
  style={{ backgroundColor: '#666666' }}
  label={'前进'}
  color={'#ffffff'}
  onPress={() => console.log('前进')}
  />
```

### Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| style         | \<Object\>        | null       | 外观样式 |
| label         | \<String\>        | undefined  | 按钮文字 |
| color         | \<String\>        | undefined  | 按钮文字颜色 |
| onPress       | \<Function\>      | () => null | 按钮点击事件 |

## Form

#### 使用

```jsx
import { Form } 'kenote-react-native-design'

const options = [
  {
    type: 'forminput',
    name: 'username',
    label: '用户名',
    labelIcon: 'user',
    labelColor: '#8cc3b2',
    placeholder: '用户名/邮箱',
    returnKeyType: 'next',
    isRequired: true
  },
  {
    type: 'forminput',
    name: 'password',
    label: '密  码',
    labelIcon: 'lock',
    labelColor: '#8cc3b2',
    placeholder: '密码',
    password: true,
    returnKeyType: 'default',
    isRequired: true
  }
]

<Form
  ref={'formlogin'}
  options={options}
  buttonLabel={'登 录'}
  buttonPress={ e => console.log(e) } />
// e = { username: '', password: '' }
```

#### Options Element

```javascript
{
  type              : 'forminput',  // 单元类型，目前只支持 'forminput'
  name              : 'username',   // 单元名称
  label             : '用户名',      // 单元标签
  labelIcon         : 'user',       // 单元标签图标；如果启用，label则失效
  labelColor        : '#8cc3b2',    // 单元标签颜色
  placeholder       : '密码',        // 单元描述文字
  placeholderColor  : '#ccc',       // 单元描述文字颜色
  password          : true,         // 是否是密码类型
  keyboardType      : 'default',    // 手机键盘类型; 'default'|'numeric'|'email-address'|'ascii-capable'|'numbers-and-punctuation'|'url'|'number-pad'|'phone-pad'|'name-phone-pad'|'decimal-pad'|'twitter'|'web-search'
  returnKeyType     : 'default',    // 手机键盘`return`键类型; 'default'|'go'|'google'|'join'|'next'|'route'|'search'|'send'|'yahoo'|'done'|'emergency-call'
  isRequired        : true          // 是否必填项
}
```

### Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| style               | \<Object\>        | null       | 外观样式 |
| options             | \<Collection\>    | []         | 表单结构数据 |
| buttonLabel         | \<String\>        | 'Submit'   | 提交按钮文字名称 |
| buttonPress         | \<Function\>      | () => null | 提交表单事件 |
| buttonDisabledStyle | \<Object\>        | null       | 提交按钮禁用状态样式 |
| pending             | \<Bool\>          | false      | 表单提交状态，提交中\<true\> \| 提交完成\<false\> |
| marginWidth         | \<Number\>        | 15         | 表单左右两侧边距 |
| textInputStyle      | \<Object\>        | null       | 表单内文本框样式 |



[npm-image]: https://img.shields.io/npm/v/kenote-react-native-design.svg
[npm-url]: https://www.npmjs.org/package/kenote-react-native-design
[downloads-image]: https://img.shields.io/npm/dm/kenote-react-native-design.svg
[downloads-url]: https://npmjs.org/package/kenote-react-native-design
[dependencies-image]: https://david-dm.org/thondery/kenote-react-native-design/status.svg
[dependencies-url]: https://david-dm.org/thondery/kenote-react-native-design
[licensed-image]: https://img.shields.io/badge/license-MIT-blue.svg
[licensed-url]: https://github.com/thondery/kenote-react-native-design/blob/master/LICENSE