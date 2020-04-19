import React from 'react'
import Button from './Button'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const mockProps = {
        children: [<div key="x">child</div>]
    }
    const tree = renderer.create(<Button {...mockProps} />).toJSON()
    expect(tree).toMatchSnapshot()
})
