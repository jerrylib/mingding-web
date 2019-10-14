import React, { Component } from 'react'
import { Routes } from '@gem-mine/durex-router'
import Header from './../../component/header'
import Footer from './../../component/footer'
import style from './style.scss'
import { getConfig } from './../../services/data-service'
import { actions, smart } from '@gem-mine/durex'
import { Divider } from 'antd'

@smart(
  state => {
    return {
      menus: state.page.menus
    }
  }
)
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    getConfig().then(resp => {
      actions.page.init(resp)
    })
  }

  render() {
    const { menus } = this.props
    console.log('menus=', menus)
    return <div className={style.container}>
      <Header menus={menus} />
      <div className={style.body}>
        <Routes path="page" />
      </div>
      <Divider />
      <Footer />
    </div>
  }
}

export default Index
