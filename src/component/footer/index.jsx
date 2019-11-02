import React, { Component } from 'react'
import style from './style.scss'
import { Col } from 'antd'
import { smart } from '@gem-mine/durex'
import isEmpty from 'lodash/isEmpty'
import first from 'lodash/first'
import intl from '@gem-mine/intl'

@smart(
  state => {
    return {
      contactInfo: state.page.contactInfo
    }
  }
)
class Footer extends Component {
  render() {
    const { contactInfo } = this.props
    if (isEmpty(contactInfo)) {
      return <div />
    }
    const { address, name, email, tels } = contactInfo
    return (<div className={style.wrapper}>
      <Col span={24}>{intl.get('版权所有')}：@Copyright {1 + new Date().getFullYear()} {intl.get(name)} {intl.get('客服信箱')}：{email} {intl.get('公司电话')}：{first(tels)}</Col>
      <Col span={24}>{intl.get('公司地址')}：{intl.get(address)}</Col>
    </div>)
  }
}

export default Footer
