<template>
  <v-container grid-list-xl>
    <v-layout wrap row>
      <v-flex xs4 d-flex>
        <v-ask-bid :items="items"></v-ask-bid>
      </v-flex>
      <v-layout row wrap>
        <v-flex xs12 d-flex>
          <v-rate></v-rate>
        </v-flex>
      </v-layout>
      <v-flex xs4 d-flex>
        <v-trade></v-trade>
      </v-flex>

      <v-flex xs4>
        <v-order-book :items="item"></v-order-book>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {
  GET_TICKER,
  GET_ORDER,
  GET_EXCHANGE_RATE
} from '~/store/mutation-types'
import VAskBid from '~/components/molecules/VAskBid'
import VOrderBook from '~/components/molecules/VOrderBook'
import VTrade from '~/components/molecules/VTrade'
import VRate from '~/components/molecules/VRate'

import { mapState, mapActions } from 'vuex'
export default {
  components: {
    VAskBid,
    VOrderBook,
    VTrade,
    VRate
  },

  data() {
    return {
      id: null,
      items: [],
      item: []
    }
  },
  computed: mapState('coincheck', ['ticker', 'order', 'exchangeRate']),
  created() {
    this.getTicker()
    this.id = setInterval(() => {
      this.getTicker()
    }, 5000)
  },
  beforeDestroy() {
    clearInterval(this.id)
  },
  methods: {
    ...mapActions('coincheck', [GET_TICKER, GET_ORDER, GET_EXCHANGE_RATE]),
    async getTicker() {
      await this.GET_TICKER()
      const { ask, bid } = this.ticker
      this.items.splice(0, 1, { ticker: 'BTCJPY', ask, bid, spread: ask - bid })
    }
  }
}
</script>

<style></style>
