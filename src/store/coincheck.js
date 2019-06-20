import {
  GET_TICKER,
  GET_ORDER,
  GET_EXCHANGE_RATE,
  GET_PRICE
} from './mutation-types.js'
export const state = () => ({
  ticker: {},
  order: {},
  exchangeRate: {},
  price: {}
})

export const mutations = {
  [GET_TICKER](state, payload) {
    state.ticker = payload
  },
  [GET_ORDER](state, payload) {
    state.order = payload
  },
  [GET_EXCHANGE_RATE](state, payload) {
    state.exchangeRate = payload
  },
  [GET_PRICE](state, payload) {
    state.price = payload
  }
}

export const actions = {
  async [GET_TICKER]({ commit }) {
    await this.$axios
      .$get('http://localhost:3000/api/ticker')
      .then(res => commit(GET_TICKER, res))
  },
  async [GET_ORDER]({ commit }) {
    await this.$axios
      .$get('http://localhost:3000/api/order_books')
      .then(res => commit(GET_ORDER, res))
  },
  async [GET_EXCHANGE_RATE]({ commit }) {
    await this.$axios
      .$get('http://localhost:3000/api/exchange/orders/rate')
      .then(res => commit(GET_EXCHANGE_RATE, res))
  },
  async [GET_PRICE]({ commit }, payload) {
    await this.$axios
      .$get('http://localhost:3000/api/exchange/orders/rate', {
        params: {
          pair: 'btc_jpy',
          order_type: payload.type,
          amount: 12
        }
      })
      .then(res => commit(GET_PRICE, res))
  }
}
