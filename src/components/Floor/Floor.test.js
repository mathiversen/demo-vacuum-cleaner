import React from 'react'
import Floor from './Floor'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const mockProps = {
        columns: 10,
        rows: 10,
        children: [<div key="x">child</div>]
    }
    const tree = renderer.create(<Floor {...mockProps} />).toJSON()
    expect(tree).toMatchSnapshot()
})
