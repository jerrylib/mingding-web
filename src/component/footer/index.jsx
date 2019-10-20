import React, { Component } from 'react'
import style from './style.scss'
import { Col } from 'antd'
import { smart } from '@gem-mine/durex'
import { first } from 'lodash'

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
    const { address, name, email, tels } = contactInfo
    return (<div className={style.wrapper}>
      <Col span={18} offset={6}>版权所有：Copyright {1 + new Date().getFullYear()} {name} 客服信箱：{email} 公司电话：{first(tels)}</Col>
      <Col span={18} offset={6}>公司地址：{address} 网站备案闽ICP备xxxxx号</Col>
    </div>)
  }
}

export default Footer
