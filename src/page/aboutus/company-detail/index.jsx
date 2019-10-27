import React, { Component } from 'react'
import { Typography } from 'antd'
import { actions, smart } from '@gem-mine/durex'
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
        <Title>公司简介</Title>
        <Paragraph>
          {descriptions}
        </Paragraph>
      </Typography>
    )
  }
}

export default CompanyDetail
