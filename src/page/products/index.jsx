import React, { Component } from 'react'
import { Col, Card, Row, Modal } from 'antd'
import { smart } from '@gem-mine/durex'
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
      currentProduct: null
    }
  }

  handleClick = currentProduct => {
    this.setState({ currentProduct })
  }

  render() {
    const { products = [] } = this.props
    const { currentProduct } = this.state
    return <Col>
      <Col span={8} style={{ paddingRight: 5 }}>
        <ProductsCard />
      </Col>
      <Col span={16} style={{ backgroundColor: '#fefefe', border: '1px solid #e8e8e8' }}>
        {
          products.map((product, index) => {
            return <Col span={7} offset={1} style={{ paddingBottom: 10 }} key={index}>
              <Card
                hoverable
                onClick={() => this.handleClick(product)}
                style={{ margin: 'auto' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Col>
  }
}

export default Products
