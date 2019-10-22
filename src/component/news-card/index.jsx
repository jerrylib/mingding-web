import React, { Component } from 'react'
import { Card } from 'antd'
import { smart } from '@gem-mine/durex'
import { groupBy } from 'lodash'
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
    const { articles = [], onChange } = this.props
    const articleTypes = groupBy(articles, 'type')
    return (
      <Card title="新闻中心" extra={<a>More&nbsp;>&nbsp;</a>}>
        {
          Object.keys(articleTypes).map(articleType =>
            <p className={style.articleItem} onClick={() => onChange(articleType)} key={articleType}>> {articleType}</p>)
        }
      </Card>
    )
  }
}

export default NewsCard
