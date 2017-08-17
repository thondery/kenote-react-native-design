import { Text } from 'react-native'
import React from 'react'
import { Button, LeftButton, RightButton } from '../src'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly => Button::label', () => {
  const tree = renderer.create(
    <Button label={'Button'} />
  )
})

it('renders correctly => Button::children', () => {
  const tree = renderer.create(
    <Button>
      <Text>Button</Text>
    </Button>
  )
})

it('renders correctly => LeftButton', () => {
  const tree = renderer.create(
    <LeftButton label={'Back'} />
  )
})

it('renders correctly => RightButton', () => {
  const tree = renderer.create(
    <RightButton label={'Forward'} />
  )
})