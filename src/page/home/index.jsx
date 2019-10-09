import React, { Component } from 'react'
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

  render() {
    const { products } = this.state
    console.log('products=', products)
    return <div className={`${style.home} uk-section uk-section-muted`}>
      <div className="uk-container uk-container-small">
        <div className="uk-child-width-1-3@s uk-grid-match uk-grid">
          {
            products.map((productItem, index) => {
              const { title, image, desc } = productItem
              return <div className={index % 3 === 0 ? 'uk-first-column uk-grid-margin' : 'uk-grid-margin'}>
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
          {/* <Modal
            title={null}
            visible
            closable={false}
            footer={null}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
              <div className="uk-child-width-1-2@m uk-grid-match" uk-grid id="gap">
                <img data-src="Images/Indonesia.jpg" className="modelImg" alt="" uk-img />
                <img data-src="Images/ImageJob.png" className="modelImg" alt="" uk-img />
              </div>
              <div className="uk-container uk-container-small modelClass">
                <div className="uk-child-width-1-2@m uk-grid-match" uk-grid>
                  <form>
                    <label htmlFor="fname" className="jobLable">Product Title</label>
                    <input type="text" id="fname" name="fname" placeholder="Product Title" />
                    <label htmlFor="lname" className="jobLable">Price</label>
                    <input type="text" id="lname" name="lname" placeholder="Price" />
                    <label htmlFor="lname" className="jobLable">Other Price</label>
                    <input type="text" id="lname" name="lname" placeholder="Enter offer Price" />
                    <label htmlFor="lname" className="jobLable">Shipping Cost</label>
                    <input type="text" id="lname" name="lname" placeholder="Enter Cost" />
                    <label htmlFor="lname" className="jobLable">Inventory
                    </label>
                    <input type="text" id="lname" name="lname" />

                    <label htmlFor="lname" className="jobLable">Description</label>
                    <input type="text" id="lname" name="lname" placeholder="Enter Description for Product" />
                  </form>

                  <h6 className="jobContent">
                    <a href="#"><span className="uk-margin-small-right plusIcon" uk-icon="icon: plus; ratio: 1" /></a>
                    Have Variations to your product like size,color and more?</h6>
                </div>
              </div>
              <button className="btn"><i className="fa fa-arrow-right" aria-hidden="true" /></button>
            </div>
          </Modal> */}
        </div>
      </div>
    </div>
  }
}
export default Home
