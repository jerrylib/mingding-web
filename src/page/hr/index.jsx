import React, { Component } from 'react'
import { Row } from 'antd'
import intl from '@gem-mine/intl'
class Hr extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (<Row>{intl.get('正在建设中')}...</Row>)
  }
}

export default Hr
