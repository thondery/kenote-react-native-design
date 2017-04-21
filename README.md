# kenote-react-native-design

一个关于 React Native 的 UI组件库，基于 react 15.4.x 和 react-native 0.42.x

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
| icon          | \<String\>        | undefined  | 图标名称，图标使用了 FontAwesome，具体名称可到官网查询。   |
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
| color         | \<String\>        | undefind   | 按钮文字颜色 |
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
| color         | \<String\>        | undefind   | 按钮文字颜色 |
| onPress       | \<Function\>      | () => null | 按钮点击事件 |