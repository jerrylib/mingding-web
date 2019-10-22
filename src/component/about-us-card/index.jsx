import React, { Component } from 'react'
import { Card } from 'antd'
import style from './style'

class AboutUsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (<Card title="关于我们" extra={<a>More&nbsp;>&nbsp;</a>}>
      <p className={style.item}>> 公司简介</p>
      <p className={style.item}>> 公司文化</p>
      <p className={style.item}>> 组织机构</p>
      <p className={style.item}>> 营销网络</p>
      <p className={style.item}>> 年中大促</p>
    </Card>)
  }
}

export default AboutUsCard
