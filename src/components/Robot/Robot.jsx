import React from 'react'

import { css } from 'goober'

export default () => {
    let className = css`
        position: absolute;
        fill: none;
        stroke: white;
        stroke-width: 10px;
        stroke-location: inside;
        width: 90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `

    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="50" cy="50" r="40" />
        </svg>
    )
}
