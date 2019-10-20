import React, { Component } from 'react'
import { Link, urlFor } from '@gem-mine/durex-router'
import style from './style.scss'
import { Row, Col, Icon } from 'antd'
import { smart } from '@gem-mine/durex'
import { first } from 'lodash'

@smart(
  state => {
    return {
      contactInfo: state.page.contactInfo
    }
  }
)
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
    const { contactInfo = {} } = this.props
    const { name, eName, tels } = contactInfo
    return <div className={style.wrapper}>
      <Row>
        <Col className={style.logoCol} span={24}>
          <Col span={6}>
            <div className={style.logo} />
          </Col>
          <Col span={12} style={{ padding: '25px 0' }}>
            <span className={style.name}>{name}</span>
            <p>{eName}</p>
          </Col>
          <Col span={6} style={{ padding: 29 }}>
            <Col span={24}>
              <span>设为首页</span> | <span>加入收藏</span> | <Link to={urlFor('page.contact')}>
                联系我们
              </Link>
            </Col>
            <Col span={24} className={style.phone}>
              <Icon type="phone" /> 服务电话：<span className={style.phoneNumber}>{first(tels)}</span>
            </Col>
          </Col>
        </Col>
        <Col span={18} offset={3} className={style.menu}>
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
