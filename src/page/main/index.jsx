import React, { Component } from 'react'
import { Col, Row } from 'antd'
import { smart } from '@gem-mine/durex'
import AboutUs from '../../component/about-us-card/index'
import ArticleList from '../../component/article-list/index'
import HotSales from '../../component/hot-sales/index'
import ContactCard from '../../component/contact-card/index'

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
    return <Row>
      <Col span={8} style={{ paddingRight: 5 }}>
        <AboutUs />
      </Col>
      <Col span={8} style={{ paddingRight: 5 }}>
        <HotSales />
      </Col>
      <Col span={8} >
        <ContactCard />
      </Col>
      <Col style={{ backgroundColor: '#fefefe', paddingTop: 5 }} span={24}>
        <ArticleList />
      </Col>
    </Row >
  }
}

export default Main
