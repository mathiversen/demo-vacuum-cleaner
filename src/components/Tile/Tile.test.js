import React from 'react'
import Tile from './Tile'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const mockProps = {
        x: 5,
        y: 5,
        clean: true,
        children: [<div key="x">child</div>]
    }
    const tree = renderer.create(<Tile {...mockProps} />).toJSON()
    expect(tree).toMatchSnapshot()
})
