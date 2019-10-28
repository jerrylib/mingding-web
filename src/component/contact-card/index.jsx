import React, { Component } from 'react'
import { Card } from 'antd'
import { smart } from '@gem-mine/durex'
import intl from '@gem-mine/intl'

@smart(
  state => {
    return {
      contactInfo: state.page.contactInfo
    }
  }
)
class ContactCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { contactInfo = {} } = this.props
    const { tels = [], fox, email, address, whatapps = [] } = contactInfo
    return (<Card title={intl.get('联系我们')} style={{ width: 300 }}>
      {
        tels.map((tel, index) => <p key={tel}>{intl.get('电&nbsp;话')}{index + 1}： {tel}</p>)
      }
      {
        whatapps.map((whatapp, index) => <p key={whatapp}>whatapps{index + 1}： {whatapp}</p>)
      }
      {
        fox && <p>{intl.get('传&nbsp;真')}：{fox}</p>
      }
      {
        email && <p>{intl.get('邮&nbsp;件')}： {email}</p>
      }
      {
        address && <p>{intl.get('地&nbsp;址')}：{intl.get(address)}</p>
      }

    </Card>)
  }
}

export default ContactCard
