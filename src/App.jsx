import React from 'react'
import { Router, Routes } from '@gem-mine/durex-router'
import I18N from './i18n'
import bootstrap from './config/bootstrap'
import './asset/style'

class App extends React.Component {
  render() {
    return (
      <I18N bootstrap={bootstrap}>
        <Router>
          <Routes />
        </Router>
      </I18N>
    )
  }
}

export default App
