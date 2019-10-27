import React, { Component } from 'react'
import { Statistic } from 'antd'
import { actions, smart } from '@gem-mine/durex'

@smart(
  state => {
    return {
      contactInfo: state.page.contactInfo
    }
  }
)
class TimeStart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0
    }
  }
  componentDidMount() {
    const { contactInfo: { createTime } } = this.props
    setInterval(() => {
      this.setState({
        seconds: (Date.now() - new Date(createTime)) / 1000
      })
    }, 64)
  }
  render() {
    const { seconds } = this.state
    return (
      <Statistic title="我们已经成立（秒）" value={seconds} precision={3} />
    )
  }
}

export default TimeStart
