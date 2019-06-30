import {
  GET_TICKER,
  GET_ORDER,
  GET_EXCHANGE_RATE,
  GET_STORE_RATE,
  GET_PRICE
} from './mutation-types.js'
export const state = () => ({
  ticker: null,
  order: null,
  exchangeRate: null,
  storeRate: null,
  price: null
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
  [GET_STORE_RATE](state, payload) {
    state.storeRate = payload
  },
  [GET_PRICE](state, payload) {
    state.price = payload
  }
}

export const actions = {
  async [GET_TICKER]({ commit }) {
    await this.$axios
      .$get('https://cranky-sinoussi-12fee2.netlify.com/api/ticker')
      .then(res => commit(GET_TICKER, res))
  },
  async [GET_ORDER]({ commit }) {
    await this.$axios
      .$get('https://cranky-sinoussi-12fee2.netlify.com/api/order_books')
      .then(res => commit(GET_ORDER, res))
  },
  async [GET_EXCHANGE_RATE]({ commit }) {
    await this.$axios
      .$get(
        'https://cranky-sinoussi-12fee2.netlify.com/api/exchange/orders/rate'
      )
      .then(res => commit(GET_EXCHANGE_RATE, res))
  },
  async [GET_STORE_RATE]({ commit }, pair) {
    await this.$axios
      .$get(`https://cranky-sinoussi-12fee2.netlify.com/api/rate/${pair}`)
      .then(res => commit(GET_STORE_RATE, res))
  },
  async [GET_PRICE]({ commit }, { pair, orderType, price, amount }) {
    await this.$axios
      .$get(
        'https://cranky-sinoussi-12fee2.netlify.com/api/exchange/orders/rate',
        {
          params: { pair, amount, price, order_type: orderType }
        }
      )
      .then(res => commit(GET_PRICE, res))
  }
}
