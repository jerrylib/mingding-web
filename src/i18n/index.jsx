import React, { Component } from 'react'
import intl from '@gem-mine/intl'
import LANGUAGE from './language'

const locales = {}
Object.keys(LANGUAGE).forEach(key => {
  // 如果语言包很小，建议全部使用本地化
  locales[key] = require(`./${key}`)
})

class I18N extends Component {
  state = {
    initDone: false
  }
  componentDidMount() {
    intl.init({ locales }).then(() => {
      if (this.props.bootstrap) {
        this.props.bootstrap()
      }
      this.setState({ initDone: true })
    })
  }

  render() {
    if (this.state.initDone) {
      return this.props.children
    } else {
      return <></>
    }
  }
}

export default I18N

// formatMessage 和 FormattedMessage 都是为了兼容 react-intl的语法
export const formatMessage = ({ id, defaultMessage }) => intl.get(id) || defaultMessage

export function FormattedMessage({ id, defaultValue }) {
  return intl.get(id) || defaultValue || id
}
