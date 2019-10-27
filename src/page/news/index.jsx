import React, { Component } from 'react'
import { Row } from 'antd'
import { Routes } from '@gem-mine/durex-router'

class News extends Component {
  render() {
    return (<Row>
      <Routes path="page.news" />
    </Row>)
  }
}

export default News
