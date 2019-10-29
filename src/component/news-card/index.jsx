import React, { Component } from 'react'
import { Card } from 'antd'
import { smart } from '@gem-mine/durex'
import groupBy from 'lodash/groupBy'
import isEqual from 'lodash/isEqual'
import style from './style.scss'
import intl from '@gem-mine/intl'

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
      <Card title={intl.get('新闻中心')}>
        {
          Object.keys(articleTypes).map(articleType =>
            <p className={style.articleItem}
              onClick={() => onChange(articleType)}
              key={articleType}>{isEqual(articleType, type) && '> '}{intl.get(articleType)}</p>)
        }
      </Card>
    )
  }
}

export default NewsCard
