import React from 'react'
import ReactDOM from 'react-dom'
import { setPragma, glob } from 'goober'

import RobotCleaner from './compositions/RobotCleaner'

setPragma(React.createElement)

glob`
    html {
        font-size: 100%;
    }

    body {
        margin: 0;
        padding: 1rem;
    }

    * {
        box-sizing: border-box;
    }    
`

ReactDOM.render(<RobotCleaner />, document.getElementById('app'))
