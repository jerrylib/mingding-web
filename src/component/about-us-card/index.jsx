import React, { Component } from 'react'
import { Card } from 'antd'
class AboutUsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (<Card title="关于我们" extra={<a>More&nbsp;>&nbsp;</a>}>
      <p>> 公司简介</p>
      <p>> 公司文化</p>
      <p>> 组织机构</p>
      <p>> 营销网络</p>
      <p>> 年中大促</p>
    </Card>)
  }
}

export default AboutUsCard
