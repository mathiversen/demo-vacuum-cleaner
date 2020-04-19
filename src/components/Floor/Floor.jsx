import React from 'react'
import { css } from 'goober'

export default ({ children, columns, rows }) => {
    const classname = css`
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(${rows}, 1fr);
        grid-gap: 2px;
        background: black;
        border: solid 2px black;
    `
    return <section className={classname}>{children}</section>
}
