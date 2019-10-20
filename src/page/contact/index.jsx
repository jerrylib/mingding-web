import React, { Component } from 'react'
import { Col } from 'antd'
import AboutUs from './../../component/about-us-card/index'
class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <Col span={24}>
      <AboutUs />
    </Col>
  }
}

export default Contact
