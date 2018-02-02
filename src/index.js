import React from 'react'
import ReactDOM from 'react-dom'

import './styles/normalize.css'
import './styles/index.css'

import Layout from './layout/'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Layout />, document.getElementById('root'))
registerServiceWorker()
