import React, { Component } from 'react'
import { List, Badge, Icon, Card } from 'antd'
import filter from 'lodash/filter'
import style from './style.scss'
import { Link, urlFor } from '@gem-mine/durex-router'
import { smart } from '@gem-mine/durex'
import intl from '@gem-mine/intl'
import moment from 'moment'

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
    return (<Card title={intl.get(type || '新闻中心')} bodyStyle={{ padding: '0 24px' }}
      extra={<Link to={urlFor('page.news')}>
        <a>{intl.get('更多')}&nbsp;>&nbsp;</a>
      </Link>}>
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
            <Link style={{ marginLeft: 10 }} to={urlFor('page.news.detail', { id: item.id })}>
              {intl.get(item.title)}
            </Link>
            <span style={{ position: 'absolute', right: 5 }}>{item.publish_time}</span>
          </List.Item>
        )}
      />
    </Card>

    )
  }
}

export default ArticleList
