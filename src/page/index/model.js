import durex from '@gem-mine/durex'

durex.model({
  name: 'page',
  state: {},
  reducers: {
    init(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {

  }
})
