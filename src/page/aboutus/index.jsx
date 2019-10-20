import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import style from './style.scss'
import AboutUsCard from '../../component/about-us-card/index'

class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <Row>
      <Col span={8}>
        <AboutUsCard />
      </Col>
      <Col span={16} className={style.center} >
        <Card title="公司简介" extra={<a>More&nbsp;>&nbsp;</a>}>
          <p>> 公司简介</p>
          <p>> 公司文化</p>
          <p>> 组织机构</p>
          <p>> 营销网络</p>
          <p>> 年中大促</p>
        </Card>
      </Col>
    </Row>
  }
}

export default AboutUs
