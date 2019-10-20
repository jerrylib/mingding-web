import React, { Component } from 'react'
import { Row, Col } from 'antd'
import ContactCard from './../../component/contact-card'

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (<Row>
      <Col span={8}>
        <ContactCard />
      </Col>
      <Col span={16} />
    </Row>)
  }
}

export default News
