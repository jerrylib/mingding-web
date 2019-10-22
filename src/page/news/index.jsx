import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import NewsCard from './../../component/news-card'
import { smart } from '@gem-mine/durex'
import { filter } from 'lodash'
import ArticleList from './../../component/article-list/index'

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '公司新闻'
    }
  }

  onChange = type => {
    this.setState({
      type
    })
  }
  render() {
    const { type } = this.state
    return (<Row>
      <Col span={8} style={{ paddingRight: 5 }}>
        <NewsCard onChange={this.onChange} />
      </Col>
      <Col span={16} >
        <ArticleList type={type} />
      </Col>
    </Row>)
  }
}

export default News
