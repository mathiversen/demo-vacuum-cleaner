import React from 'react'
import { css } from 'goober'

export default ({ children, onClick }) => {
    const classname = css`
        background: white;
        border: none;
        color: black;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        cursor: pointer;
    `
    return (
        <button onClick={onClick} className={classname}>
            {children}
        </button>
    )
}
