import React, { Component } from 'react'
import { Card } from 'antd'
import { smart } from '@gem-mine/durex'
import { groupBy, isEqual } from 'lodash'
import style from './style.scss'

@smart(
  state => {
    return {
      products: state.page.products
    }
  }
)
class ProductsCard extends Component {
  render() {
    const { products = [], onChange, type } = this.props
    const productTypes = groupBy(products, 'type')
    return (
      <Card title="产品类别">
        <p className={style.productTypeItem}
          onClick={() => onChange('')}>{isEqual(type, '') && '> '}全部{}</p>
        {
          Object.keys(productTypes).map(productType =>
            <p className={style.productTypeItem}
              onClick={() => onChange(productType)}
              key={productType}>{isEqual(type, productType) && '> '} {productType}</p>)
        }
      </Card>
    )
  }
}

export default ProductsCard
