import React, { Component } from 'react'
import { Card } from 'antd'
import { smart } from '@gem-mine/durex'
import { groupBy } from 'lodash'
import style from './style.scss'

@smart(
  state => {
    return {
      products: state.page.products
    }
  }
)
class ProductsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { products = [], onChange } = this.props
    const productTypes = groupBy(products, 'type')
    return (
      <Card title="产品类别" extra={<a>More&nbsp;>&nbsp;</a>}>
        {
          Object.keys(productTypes).map(productType =>
            <p className={style.productTypeItem} onClick={() => onChange(productType)} key={productType}>> {productType}</p>)
        }
      </Card>
    )
  }
}

export default ProductsCard
