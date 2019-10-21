import React, { Component } from 'react'
import { Row, Col, Card, Typography } from 'antd'
import style from './style.scss'
import AboutUsCard from '../../component/about-us-card/index'
import { actions, smart } from '@gem-mine/durex'

const { Title, Paragraph, Text } = Typography

@smart(
  state => {
    return {
      descriptions: state.page.descriptions
    }
  }
)
class AboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { descriptions } = this.props
    return <Row>
      <Col span={8} style={{ paddingRight: 5 }}>
        <AboutUsCard />
      </Col>
      <Col style={{ backgroundColor: '#fefefe', padding: 10, border: '1px solid #e8e8e8' }} span={16}>
        <Typography>
          <Title>公司简介</Title>
          <Paragraph>
            {descriptions}
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  }
}

export default AboutUs
