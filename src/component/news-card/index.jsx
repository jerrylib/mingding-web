import React, { Component } from 'react'
import { Card } from 'antd'
import { smart } from '@gem-mine/durex'
import { groupBy } from 'lodash'

@smart(
  state => {
    return {
      articles: state.page.articles
    }
  }
)
class NewsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { articles = [] } = this.props
    const articleTypes = groupBy(articles, 'type')
    return (
      <Card title="新闻中心" extra={<a>More&nbsp;>&nbsp;</a>} style={{ width: 300 }}>
        {
          Object.keys(articleTypes).map(articleType => <p className="article-item" key={articleType}>> {articleType}</p>)
        }
      </Card>
    )
  }
}

export default NewsCard
