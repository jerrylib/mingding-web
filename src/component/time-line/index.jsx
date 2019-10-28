import React, { Component } from 'react'
import { Timeline as TimeLineAntd } from 'antd'
import { smart } from '@gem-mine/durex'
import { map, reverse } from 'lodash'
import intl from '@gem-mine/intl'
const { Item } = TimeLineAntd

@smart(
  state => {
    return {
      timeLine: state.page.timeLine
    }
  }
)
class TimeLine extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { timeLine } = this.props
    return (
      <TimeLineAntd>
        {
          map(reverse(timeLine), (timeLineItem, index) => {
            const { title, date } = timeLineItem
            return <Item key={index}>{intl.get(title)} {date}</Item>
          })
        }
      </TimeLineAntd>
    )
  }
}

export default TimeLine
