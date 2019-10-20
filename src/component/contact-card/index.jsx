import React, { Component } from 'react'
import { Card } from 'antd'
import { isEmpty } from 'lodash'

import { smart } from '@gem-mine/durex'

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
    const { tels, fox, email, address } = contactInfo
    return (<Card title="联系我们" extra={<a>More&nbsp;>&nbsp;</a>} style={{ width: 300 }}>
      {
        tels.map(tel => <p key={tel}>电&nbsp;话： {tel}</p>)
      }
      {
        fox && <p>传&nbsp;真：{fox}</p>
      }
      {
        email && <p>邮&nbsp;件： {email}</p>
      }
      {
        address && <p>地&nbsp;址：{address}</p>
      }

    </Card>)
  }
}

export default ContactCard
