import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { smart } from '@gem-mine/durex'
import Contact from './../../component/contact'

@smart(
  state => {
    return {
      contactInfo: state.page.contactInfo
    }
  }
)
class Page4 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { contactInfo } = this.props
    return (<Row>
      <Col span={8}>
        <Contact contactInfo={contactInfo} />
      </Col>
      <Col span={16} />
    </Row>)
  }
}

export default Page4
