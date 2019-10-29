import React, { Component } from 'react'
import { Link, urlFor } from '@gem-mine/durex-router'
import style from './style.scss'
import { Row, Col, Icon } from 'antd'
import { smart } from '@gem-mine/durex'
import first from 'lodash/first'
import isEmpty from 'lodash/isEmpty'
import intl from '@gem-mine/intl'

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
  setLanguage = lang => {
    intl.setLocale(lang)
  }
  addFavorite = () => {
    const title = '我的站点'
    const url = location.href
    try {
      window.external.addFavorite(url, title)
    } catch (e) {
      try {
        window.sidebar.addPanel(title, url, '')
      } catch (e) {
        alert('抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加')
      }
    }
  }
  setIndex = (event) => {
    const obj = event.target
    const url = location.origin
    try {
      obj.style.behavior = 'url(#default#homepage)'
      obj.setHomePage(url)
    } catch (e) {
      if (window.netscape) {
        try {
          window.netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect')
        } catch (e) {
          alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'")
        }
      } else {
        alert('抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【' + url + '】设置为首页。')
      }
    }
  }

  render() {
    const { menus } = this.props
    const { contactInfo } = this.props
    if (isEmpty(contactInfo)) {
      return <div />
    }
    const { name, eName, tels } = contactInfo
    return <div className={style.wrapper}>
      <Row>
        <Col className={style.logoCol} span={24}>
          <Col span={6}>
            <div className={style.logo} />
          </Col>
          <Col span={12} style={{ padding: '25px 0' }}>
            <span className={style.name}>{intl.get(name)}</span>
            <p>{intl.get(eName)}</p>
          </Col>
          <Col span={6} style={{ padding: 29 }}>
            <Col span={24}>
              {/* <a onClick={this.setIndex}>设为首页</a>
              | <a onClick={this.addFavorite}>加入收藏</a>  */}
              <a onClick={() => this.setLanguage('zh-CN')}>中文</a> | <a onClick={() => this.setLanguage('en')}>English</a> | <Link to={urlFor('page.contact')}>
                {intl.get('联系我们')}
              </Link>
            </Col>
            <Col span={24} className={style.phone}>
              <Icon type="phone" /> {intl.get('服务电话')}：<span className={style.phoneNumber}>{first(tels)}</span>
            </Col>
          </Col>
        </Col>
        <Col span={24}>
          <Col className={style.menu}>
            {
              menus.map((menu, index) => {
                return <Col span={4} className={style.menuItem} key={index} >
                  <Link to={urlFor(menu.path)}>
                    {intl.get(menu.title)}
                  </Link>
                </Col>
              })
            }
          </Col>
        </Col>
      </Row>
    </div>
  }
}

export default Header
