import durex from '@gem-mine/durex'

durex.model({
  name: 'page',
  state: {
    menus: [],
    products: []
  },
  reducers: {
    init(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {

  }
})
