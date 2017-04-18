import { Text } from 'react-native'
import React from 'react'
import { Button } from '../src'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

it('renders correctly => label', () => {
  const tree = renderer.create(
    <Button label={'Button'} />
  )
})

it('renders correctly => children', () => {
  const tree = renderer.create(
    <Button>
      <Text>Button</Text>
    </Button>
  )
})