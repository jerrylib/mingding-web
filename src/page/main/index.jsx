import React, { Component } from 'react'
import { Col, Row, Card, Typography, Divider } from 'antd'
import { actions, smart } from '@gem-mine/durex'
import AboutUs from '../../component/about-us-card/index'

const { Title, Paragraph, Text } = Typography

@smart(
  state => {
    return {
      descriptions: state.page.descriptions
    }
  }
)
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { descriptions } = this.props
    return <Row>
      <Col span={8}>
        <AboutUs />
      </Col>
      <Col style={{ backgroundColor: '#fefefe', padding: 10, border: '1px solid #e8e8e8' }} span={16}>
        <Typography>
          <Title>公司简介</Title>
          <Paragraph>
            {descriptions}
          </Paragraph>
        </Typography>
      </Col>
    </Row >
  }
}

export default Main
