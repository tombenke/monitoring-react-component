import React from 'react'
import ReactDOM from 'react-dom'

import { Monitoring } from './components/'

ReactDOM.render(
    <div>
        <Monitoring isAlive={false} />
    </div>,
    document.getElementById('root')
)
