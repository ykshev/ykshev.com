import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import './styles/normalize.css'

import Layout from './layout/'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Layout />, document.getElementById('root'))
registerServiceWorker()
