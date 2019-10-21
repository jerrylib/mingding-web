import React, { Component } from 'react'
import { Card } from 'antd'
import { smart } from '@gem-mine/durex'
import { groupBy } from 'lodash'

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
    const { products = [] } = this.props
    const productTypes = groupBy(products, 'type')
    return (
      <Card title="产品类别" extra={<a>More&nbsp;>&nbsp;</a>}>
        {
          Object.keys(productTypes).map(articleType => <p key={articleType}>> {articleType}</p>)
        }
      </Card>
    )
  }
}

export default ProductsCard
