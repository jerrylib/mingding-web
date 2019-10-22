import React, { Component } from 'react'
import { List, Badge, Icon, Card } from 'antd'
import { filter } from 'lodash'
import style from './style.scss'

import { smart } from '@gem-mine/durex'

@smart(
  state => {
    return {
      articles: state.page.articles
    }
  }
)
class ArticleList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { type, articles } = this.props
    return (<Card title={type || '新闻中心'} bodyStyle={{ padding: '0 24px' }} extra={<a>More&nbsp;>&nbsp;</a>}>
      <List
        header={null}
        footer={null}
        bordered={false}
        dataSource={type ? filter(articles, { type }) : articles}
        renderItem={item => (
          <List.Item className={style.articleItem}>
            {
              item.is_top && <Badge dot>
                <Icon type="notification" />
              </Badge>
            }
            <span style={{ marginLeft: 10 }}>{item.title}</span>
            <span style={{ position: 'absolute', right: 5 }}>{item.publish_time}</span>
          </List.Item>
        )}
      />
    </Card>

    )
  }
}

export default ArticleList
