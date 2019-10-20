import durex from '@gem-mine/durex'

durex.model({
  name: 'page',
  state: {
    menus: [],
    products: [],
    contactInfo: {}
  },
  reducers: {
    init(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {

  }
})
