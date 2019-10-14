import React, { Component } from 'react'
import { Link, urlFor } from '@gem-mine/durex-router'
import style from './style.scss'
import { Tabs, Row, Col } from 'antd'
// const { TabPane } = Tabs

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: ''
    }
  }
  handleChange = event => {

  }
  render() {
    const { menus } = this.props
    return <div className={style.wrapper}>
      <Row>
        <Col className={style.logoCol} span={24}>
          <Col span={6}>1</Col>
          <Col span={12}>2</Col>
          <Col span={6}>3</Col>
        </Col>
        <Col span={18} offset={3}>
          {
            menus.map((menu, index) => {
              return <Col span={4} className={style.menuItem} key={index} >
                <Link to={urlFor(menu.path)}>
                  {menu.title}
                </Link>
              </Col>
            })
          }
        </Col>
      </Row>
    </div>
  }
}

export default Header
