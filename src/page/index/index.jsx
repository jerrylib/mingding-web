import React, { Component } from 'react'
import { Routes } from '@gem-mine/durex-router'
import Header from './../../component/header'
import Footer from './../../component/footer'
import style from './style.scss'
import { getConfig } from './../../services/data-service'
import { actions, smart } from '@gem-mine/durex'
import { Divider, Carousel, Col } from 'antd'

@smart(
  state => {
    return {
      menus: state.page.menus,
      carousels: state.page.carousels
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
    const { menus = [], carousels = [] } = this.props
    return <div className={style.container}>
      <Header menus={menus} />
      <Col span={22} offset={1}>
        <Carousel easing autoplay>
          {
            carousels.map(carousel => <div key={carousel}>
              <img className={style.imageItem} src={carousel} alt="" />
            </div>)
          }
        </Carousel>
      </Col>
      <Col span={22} offset={1}>
        <div className={style.body}>
          <Routes path="page" />
        </div>
      </Col>
      <Divider />
      <Footer />
    </div>
  }
}

export default Index
