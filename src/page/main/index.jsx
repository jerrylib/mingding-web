import React, { Component } from 'react'
import { Col, Row, Card, Typography, Divider } from 'antd'
import { actions, smart } from '@gem-mine/durex'
import AboutUs from '../../component/about-us-card/index'
import ReactjsSwiper from 'reactjs-swiper'

const { Title, Paragraph, Text } = Typography

@smart(
  state => {
    return {
      descriptions: state.page.descriptions
    }
  }
)
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { descriptions } = this.props
    return <Row>
      <Col span={8} style={{ paddingRight: 5 }}>
        <AboutUs />
      </Col>
      <Col style={{ backgroundColor: '#fefefe', padding: 10, border: '1px solid #e8e8e8' }} span={16}>
        {/* <Card title="热销产品" extra={<a>More&nbsp;>&nbsp;</a>}>
          <p>> 公司简介</p>
          <p>> 公司文化</p>
          <p>> 组织机构</p>
          <p>> 营销网络</p>
          <p>> 年中大促</p>
        </Card> */}
        <ReactjsSwiper
          swiperOptions={{
            preloadImages: true,
            autoplay: 1000,
            showPagination: true,
            autoplayDisableOnInteraction: false
          }}
          showPagination
          items={[
            {
              'id': 1,
              'image': 'https://upload.jianshu.io/admin_banners/web_images/4550/a4aba36241eb146c13892301e486417cbf16af18.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
              'title': '图片1'
            },
            {
              'id': 2,
              'image': 'https://upload.jianshu.io/admin_banners/web_images/4573/8e236c77ce2141beeaee6515fb3abddfbb617fea.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
              'title': '图片2'
            },
            {
              'id': 3,
              'image': 'https://upload.jianshu.io/admin_banners/web_images/4566/867d2e49d573864ec5ae4ed9e6578a254a0c991d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
              'title': '图片3'
            },
            {
              'id': 4,
              'image': 'https://upload.jianshu.io/admin_banners/web_images/4570/5d4776585f0206ff2e807971a13b06ed7d494595.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
              'title': '图片4'
            },
            {
              'id': 5,
              'image': 'https://upload.jianshu.io/admin_banners/web_images/4574/d5c5ea3e984c8c08071b467c2dfe5bd2d0acf7b8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
              'title': '图片5'
            }
          ]} />
      </Col>
    </Row >
  }
}

export default Main
