import React, { Component } from 'react'
import { Col, Card, Row, Modal } from 'antd'
import { smart } from '@gem-mine/durex'
import { filter } from 'lodash'
import ProductsCard from '../../component/products-card/index'
const { Meta } = Card

@smart(
  state => {
    return {
      products: state.page.products
    }
  }
)
class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      currentProduct: null
    }
  }

  handleClick = currentProduct => {
    this.setState({ currentProduct })
  }

  onTypeChange = type => {
    this.setState({ type })
  }

  render() {
    const { products = [] } = this.props
    const { currentProduct, type } = this.state
    return <Col>
      <Col span={8} style={{ paddingRight: 5 }}>
        <ProductsCard onChange={this.onTypeChange} />
      </Col>
      <Col span={16} style={{ backgroundColor: '#fefefe', border: '1px solid #e8e8e8' }}>
        {
          (type ? filter(products, { type }) : products).map((product, index) => {
            const { title, logo } = product
            return <Col span={7} offset={1} style={{ paddingBottom: 10 }} key={index}>
              <Card
                hoverable
                onClick={() => this.handleClick(product)}
                style={{ margin: 'auto' }}
                cover={<img alt="example" style={{ height: 150 }} src={logo || 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'} />}
              >
                <Meta title={title} description="www.instagram.com" />
              </Card>
            </Col>
          })
        }
      </Col>
      <Modal
        title={null}
        visible={!!currentProduct}
        footer={null}
        closable={false}
        onCancel={() => this.handleClick(null)}
      >
        <img alt="example" src={currentProduct && currentProduct.logo} />
      </Modal>
    </Col>
  }
}

export default Products
