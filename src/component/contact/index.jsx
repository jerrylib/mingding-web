import React, { Component } from 'react'
import { Card } from 'antd'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { contactInfo } = this.props
    const { tel, fox, email, address } = contactInfo
    return (<Card title="Default size card" extra={<a>More&nbsp;>&nbsp;</a>} style={{ width: 300, margin: 'auto' }}>
      <p>电&nbsp;话： {tel}</p>
      <p>传&nbsp;真：{fox}</p>
      <p>邮&nbsp;件： {email}</p>
      <p>地&nbsp;址：{address}</p>
    </Card>)
  }
}

export default Contact
