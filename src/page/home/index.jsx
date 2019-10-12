import React, { Component } from 'react'
import { Modal } from 'antd'
import style from './style'
import { findProductsInPage } from './../../services/product-service'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      total: 0,
      products: []
    }
    this.loadList = this.loadList.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount() {
    this.loadList()
  }

  async loadList() {
    const { total, items } = await findProductsInPage()
    this.setState({
      total,
      products: items
    })
  }

  toggleModal(currentItem) {
    this.setState({ currentItem })
  }

  closeModal() {
    this.setState({ currentItem: undefined })
  }

  render() {
    const { products, currentItem } = this.state
    console.log('products=', products)
    return <div className={`${style.home} uk-section uk-section-muted`}>
      <div className="uk-container uk-container-small">
        <div className="uk-child-width-1-3@s uk-grid-match uk-grid">
          {
            products.map((productItem, index) => {
              const { title, image, desc } = productItem
              return <div
                className={index % 3 === 0 ? 'uk-first-column uk-grid-margin' : 'uk-grid-margin'}
                onClick={() => this.toggleModal(productItem)}>
                <div className="uk-card uk-card-default uk-card-hover">
                  <div className="uk-card-media-top">
                    <img src={image} className="Img" style={{ height: 200 }} alt="" />
                  </div>
                  <div className="uk-card-body">
                    <p className={style['card-title']}>{title}</p>
                    <hr />
                    <span>{desc}</span>
                  </div>
                </div>
              </div>
            })
          }
          <Modal
            title={null}
            visible={!!currentItem}
            closable={false}
            bodyStyle={{ padding: 0 }}
            footer={null}
            onCancel={this.closeModal}
          >
            <div>
              <img src="/images/1.jpg" className="modelImg" alt="" />
              <img src="/images/2.jpg" className="modelImg" alt="" />
            </div>
          </Modal>
        </div>
      </div>
    </div>
  }
}
export default Home
