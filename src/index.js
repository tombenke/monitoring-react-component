import React from 'react'
import ReactDOM from 'react-dom'

import Monitoring from './components/Monitoring/'

ReactDOM.render(
    <div>
        <Monitoring isAlive={false} />
    </div>,
    document.getElementById('root')
)
