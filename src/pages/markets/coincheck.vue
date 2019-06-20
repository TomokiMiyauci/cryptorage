<template>
  <div>
    <v-layout wrap row>
      <v-flex xs6>
        <v-data-table :headers="headers" :items="items">
          <template #items="{item}">
            <td class="text-xs-center">{{ item.ticker }}</td>
            <td class="text-xs-center">{{ item.ask | comma }}</td>
            <td class="text-xs-center">{{ item.spread | comma }}</td>
            <td class="text-xs-center">{{ item.bid | comma }}</td>
          </template>
        </v-data-table>
      </v-flex>
      <v-flex xs6>
        <v-data-table :headers="headers" :items="items">
          <template #items="{item}">
            <td class="text-xs-center">{{ item.ticker }}</td>
            <td class="text-xs-center">{{ item.ask | comma }}</td>
            <td class="text-xs-center">{{ item.spread | comma }}</td>
            <td class="text-xs-center">{{ item.bid | comma }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <p>{{ ticker }}</p>
  </div>
</template>

<script>
import {
  GET_TICKER,
  GET_ORDER,
  GET_EXCHANGE_RATE
} from '~/store/mutation-types'
import { mapState, mapActions } from 'vuex'
export default {
  filters: {
    comma: function(value) {
      return value.toLocaleString()
    }
  },
  data() {
    return {
      id: undefined,
      headers: [
        { text: 'Ticker', value: 'ticker', align: 'center' },
        { text: 'Ask', value: 'ask', align: 'center' },
        { text: 'Spread', value: 'spread', align: 'center' },
        { text: 'Bid', value: 'bid', align: 'center' }
      ],
      items: []
    }
  },
  computed: mapState('coincheck', ['ticker', 'order', 'exchangeRate']),
  created() {
    console.log('created')
    this.id = setInterval(() => {
      this.getTicker()
    }, 3000)
  },
  destroyed() {
    console.log('destroyed')
    clearInterval(this.id)
  },
  methods: {
    ...mapActions('coincheck', [GET_TICKER, GET_ORDER, GET_EXCHANGE_RATE]),
    async getTicker() {
      await this.GET_TICKER()
      const { ask, bid } = this.ticker
      this.arraySplice(0, { ticker: 'BTCJPY', ask, bid, spread: ask - bid })
      this.arraySplice(1, { ticker: 'XRPJPY', ask, bid, spread: 1 })
    },
    arraySplice(number, obj) {
      this.items.splice(number, 1, obj)
    }
  }
}
</script>

<style></style>
