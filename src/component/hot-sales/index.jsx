import React, { Component } from 'react'
import { Card, Col, Carousel } from 'antd'
import { smart } from '@gem-mine/durex'
import filter from 'lodash/filter'
import map from 'lodash/map'
import { Link, urlFor } from '@gem-mine/durex-router'
import style from './style'
import intl from '@gem-mine/intl'

@smart(
  state => {
    return {
      products: state.page.products,
      hotSales: state.page.hotSales
    }
  }
)
class HotSales extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { products, hotSales } = this.props
    const hotProducts = filter(products, ({ id }) => hotSales.includes(id))
    console.log('hotProducts=', hotProducts)
    return (
      <Card title={intl.get('热销商品')} extra={<Link to={urlFor('page.products')}>
        <a>{intl.get('更多')}&nbsp;>&nbsp;</a>
      </Link>}>
        <Col span={24} >
          <Carousel easing autoplay effect={'fade'}>
            {
              map(hotProducts, product => <div key={product.id}>
                <img style={{ height: '207px', margin: 'auto' }} className={style.imageItem} src={product.logo} alt="" />
              </div>)
            }
          </Carousel>
        </Col>
      </Card>
    )
  }
}

export default HotSales
