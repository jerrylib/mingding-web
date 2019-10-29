import React, { Component } from 'react'
import { Card } from 'antd'
import { smart } from '@gem-mine/durex'
import groupBy from 'lodash/groupBy'
import isEqual from 'lodash/isEqual'
import style from './style.scss'
import intl from '@gem-mine/intl'

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
      <Card title={intl.get('产品类别')}>
        <p className={style.productTypeItem}
          onClick={() => onChange('')}>{isEqual(type, '') && '> '}{intl.get('全部')}</p>
        {
          Object.keys(productTypes).map(productType =>
            <p className={style.productTypeItem}
              onClick={() => onChange(productType)}
              key={productType}>{isEqual(type, productType) && '> '} {intl.get(productType)}</p>)
        }
      </Card>
    )
  }
}

export default ProductsCard
