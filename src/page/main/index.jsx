import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { actions, smart } from '@gem-mine/durex'
import AboutUs from '../../component/about-us-card/index'
import ArticleList from '../../component/article-list/index'

@smart(
  state => {
    return {
      descriptions: state.page.descriptions,
      articles: state.page.articles
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
      <Col span={8} style={{ paddingRight: 5 }}>
        <AboutUs />
      </Col>
      <Col style={{ backgroundColor: '#fefefe' }} span={16}>
        <ArticleList />
      </Col>
    </Row >
  }
}

export default Main
