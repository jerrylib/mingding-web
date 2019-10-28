import React, { Component } from 'react'
import { Typography } from 'antd'
import { smart } from '@gem-mine/durex'
import intl from '@gem-mine/intl'
const { Title, Paragraph } = Typography

@smart(
  state => {
    return {
      descriptions: state.page.descriptions
    }
  }
)
class CompanyDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { descriptions } = this.props
    return (
      <Typography>
        <Title>{intl.get('公司简介')}</Title>
        <Paragraph>
          {descriptions}
        </Paragraph>
      </Typography>
    )
  }
}

export default CompanyDetail
