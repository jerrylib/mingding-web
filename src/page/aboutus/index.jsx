import React, { Component } from 'react'
import { Row, Col, Carousel } from 'antd'
import style from './style.scss'
import AboutUs from '../../component/aboutus/index'

class Page2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <Row>
      <Col span={8}>
        <AboutUs />
      </Col>
      <Col span={20} offset={2} >
        <Carousel autoplay>
          <div>
            <img className={style.imageItem} src="http://localhost:28000/images/1.jpg" alt="" />
          </div>
          <div>
            <img className={style.imageItem} src="http://localhost:28000/images/2.jpg" alt="" />
          </div>
          <div>
            <img className={style.imageItem} src="http://localhost:28000/images/3.jpg" alt="" />
          </div>
          <div>
            <img className={style.imageItem} src="http://localhost:28000/images/4.jpg" alt="" />
          </div>
        </Carousel>
      </Col>
    </Row>
  }
}

export default Page2
