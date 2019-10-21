import React, { Component } from 'react'
import { Col } from 'antd'
import ContactCard from './../../component/contact-card/index'
class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <Col span={24}>
      <ContactCard />
    </Col>
  }
}

export default Contact
