import React, { Component } from 'react'
import { Col, Card, Modal } from 'antd'
import { smart } from '@gem-mine/durex'
import filter from 'lodash/filter'
import ProductsCard from '../../component/products-card/index'
import intl from '@gem-mine/intl'
import style from './style'
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
        <ProductsCard type={type} onChange={this.onTypeChange} />
      </Col>
      <Col span={16} style={{ backgroundColor: '#fefefe', border: '1px solid #e8e8e8' }}>
        {
          (type ? filter(products, { type }) : products).map((product, index) => {
            const { title, logo, desc } = product
            return <Col span={7} offset={1} style={{ paddingBottom: 10 }} key={index}>
              <Card
                hoverable
                onClick={() => this.handleClick(product)}
                className={style.productItem}
                cover={<img alt="example" style={{ height: 150 }} src={logo || 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'} />}
              >
                <Meta title={intl.get(title)} description={`${intl.get('技术参数')}：${desc}`} />
              </Card>
            </Col>
          })
        }
      </Col>
      <Modal
        title={null}
        bodyStyle={{ padding: 0, textAlign: 'center' }}
        visible={!!currentProduct}
        style={{ maxHeight: '80%', maxWidth: '80%' }}
        footer={null}
        closable
        onCancel={() => this.handleClick(null)}
      >
        {currentProduct && <img style={{ maxHeight: 400 }} alt="example" src={currentProduct && currentProduct.logo} />}
      </Modal>
    </Col>
  }
}

export default Products
