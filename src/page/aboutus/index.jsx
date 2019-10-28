import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './style.scss'
import AboutUsCard from '../../component/about-us-card/index'
import { Routes } from '@gem-mine/durex-router'

class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <Row>
      <Col span={8} style={{ paddingRight: 5 }}>
        <AboutUsCard />
      </Col>
      <Col style={{ backgroundColor: '#fefefe', padding: 10, border: '1px solid #e8e8e8' }} span={16}>
        <Routes path="page.aboutus" />
      </Col>
    </Row>
  }
}

export default AboutUs
