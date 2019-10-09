import 'core-js/stable'
import React from 'react'
import { render } from '@gem-mine/durex'

import './config/request'
import './route'
import './config/durex'

import App from './App'
import { importAll } from './util/loader'
import * as serviceWorker from './util/serviceWorker'

importAll(require.context('../src', true, /model(\/.+)?\.js$/))

render(<App />, document.querySelector('#root'))

serviceWorker.unregister()
