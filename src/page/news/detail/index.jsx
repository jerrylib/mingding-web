import React, { Component } from 'react'
import { Col, Typography, Divider, Empty } from 'antd'
import { smart } from '@gem-mine/durex'
import find from 'lodash/find'
import isEmpty from 'lodash/isEmpty'
import { withRouter } from '@gem-mine/durex-router'
import style from './style'
const { Title, Paragraph, Text } = Typography

@withRouter
@smart(
  state => {
    return {
      articles: state.page.articles
    }
  }
)
class NewsDetail extends Component {
  render() {
    const { match, articles } = this.props
    const { params: { id } } = match
    const currentArticle = find(articles, { id })
    if (isEmpty(currentArticle)) {
      return <Col span={24}>
        <Empty />
      </Col>
    }
    const { desc, title, publish_time } = currentArticle
    return (
      <Col span={24} className={style.article} >
        <Typography>
          <Title>{title}</Title>
          <Divider />
          <Paragraph>
            {desc}
          </Paragraph>
          <Text style={{ float: 'right' }}>{publish_time}</Text>
        </Typography>

      </Col>
    )
  }
}

export default NewsDetail
