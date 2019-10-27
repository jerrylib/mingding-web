import React, { Component } from 'react'
import { Card } from 'antd'
import { smart } from '@gem-mine/durex'
import { groupBy, isEqual } from 'lodash'
import style from './style.scss'

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
    const { articles = [], onChange, type } = this.props
    const articleTypes = groupBy(articles, 'type')
    return (
      <Card title="新闻中心">
        {
          Object.keys(articleTypes).map(articleType =>
            <p className={style.articleItem}
              onClick={() => onChange(articleType)}
              key={articleType}>{isEqual(articleType, type) && '> '}{articleType}</p>)
        }
      </Card>
    )
  }
}

export default NewsCard
