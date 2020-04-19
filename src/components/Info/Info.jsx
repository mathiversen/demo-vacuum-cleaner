import React from 'react'
import { css } from 'goober'

export default ({ children }) => {
    const className = css`
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        place-items: center;
        background: black;
        color: white;
        padding: 1rem;
    `

    return <p className={className}>{children}</p>
}
