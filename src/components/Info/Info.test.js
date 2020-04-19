import React from 'react'
import Info from './Info'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
    const mockProps = {
        children: <div key="x">child</div>
    }
    const tree = renderer.create(<Info {...mockProps} />).toJSON()
    expect(tree).toMatchSnapshot()
})
