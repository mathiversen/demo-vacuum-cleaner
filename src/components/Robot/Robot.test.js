import React from 'react'
import Robot from './Robot'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const tree = renderer.create(<Robot />).toJSON()
    expect(tree).toMatchSnapshot()
})
