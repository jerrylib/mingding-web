import React, { Component } from 'react'
import style from './style.scss'
import { Col } from 'antd'
class Footer extends Component {
  render() {
    return (<div className={style.wrapper}>
      <Col span={12} offset={6}>@{1 + new Date().getFullYear()}</Col>
    </div>)
  }
}

export default Footer
