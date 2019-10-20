import React, { Component } from 'react'
import { Col, Card, Row, Modal } from 'antd'
import { smart } from '@gem-mine/durex'
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
    const { products } = this.props
    const { currentProduct } = this.state
    return (<Row>
      {
        products.map((product, index) => {
          return <Col span={6} style={{ paddingBottom: 10 }} key={index}>
            <Card
              hoverable
              onClick={() => this.handleClick(product)}
              style={{ width: 240, margin: 'auto' }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        })
      }
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
    </Row>)
  }
}

export default Products
