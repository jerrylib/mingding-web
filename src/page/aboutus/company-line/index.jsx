import React, { Component } from 'react'
import { Col, Row } from 'antd'
import TimeLine from './../../../component/time-line/index'
import TimeStart from './../../../component/time-start/index'
class CompanyLine extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Row>
        <Col span={24}>
          <TimeStart />
        </Col>
        <Col span={24} style={{ padding: '20px 10px 10px 100px' }}>
          <TimeLine />
        </Col>
      </Row>
    )
  }
}

export default CompanyLine
