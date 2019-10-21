import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import NewsCard from './../../component/news-card'
import { smart } from '@gem-mine/durex'
import { filter } from 'lodash'

@smart(
  state => {
    return {
      articles: state.page.articles
    }
  }
)
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
    const { articles } = this.props
    const { type } = this.state
    return (<Row>
      <Col span={8} style={{ paddingRight: 5 }}>
        <NewsCard onChange={this.onChange} />
      </Col>
      <Col span={16} >
        <Card title={type} extra={<a>More&nbsp;>&nbsp;</a>}>
          {
            filter(articles, { type }).map(({ id, title }) => <p key={id}>> {title}</p>)
          }
        </Card>
      </Col>
    </Row>)
  }
}

export default News
