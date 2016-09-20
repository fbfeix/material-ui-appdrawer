import React from 'react'
import ReactDOM from 'react-dom'

import App from '../../../src/index.jsx'

import './flex.scss'
import './style.scss'

const drawerContent = <div>
    <h3>Drawer</h3>
<p>Wow</p>
</div>

ReactDOM.render(<App drawerContent={drawerContent}><div><h2>Wow this is awesome</h2><p>Your App Drawer</p></div></App>, document.getElementById('container'))
