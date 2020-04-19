import React from 'react'
import { css } from 'goober'

export default ({ x, y, clean, children }) => {
    const uniqueClass = css`
        grid-column: ${x + 1};
        grid-row: ${y + 1};
        background: ${clean ? '#00a933' : '#b85c00'};
    `
    const commonClass = css`
        width: 100%;
        padding-bottom: 100%;
        position: relative;
    `
    const pos = `${x}:${y}`
    return (
        <div data-pos={pos} className={[commonClass, uniqueClass].join(' ')}>
            {children}
        </div>
    )
}
