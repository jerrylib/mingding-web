import React, { Component } from 'react'
import { Card } from 'antd'
import style from './style'
import { Link, urlFor } from '@gem-mine/durex-router'
import intl from '@gem-mine/intl'

class AboutUsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (<Card title={intl.get('关于我们')} extra={<Link to={urlFor('page.aboutus')}>
      <a>{intl.get('更多')}&nbsp;>&nbsp;</a>
    </Link>}>
      <Link to={urlFor('page.aboutus')}>
        <p className={style.item}>> {intl.get('公司简介')}</p>
      </Link>
      <Link to={urlFor('page.aboutus.line')}>
        <p className={style.item}>> {intl.get('公司历程')}</p>
      </Link>
    </Card>)
  }
}

export default AboutUsCard
