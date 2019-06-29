<template>
  <div>
    <v-container grid-list-xs>
      <v-layout row wrap>
        <v-flex xs4>
          <v-order-book :items="items"></v-order-book>
        </v-flex>
      </v-layout>
    </v-container>
    <v-btn color="success" @click="click">text</v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { GET_ORDER } from '~/store/mutation-types'
import VOrderBook from '~/components/molecules/VOrderBook'
export default {
  components: {
    VOrderBook
  },
  data() {
    return {
      items: []
    }
  },
  computed: {
    ...mapState('coincheck', ['order']),
    orderBook: function() {
      const orderBookAsks = this.order.asks.concat()
      const orderBookbids = this.order.bids.concat()
      const orderBook = []
      orderBookAsks.length = 10
      orderBookbids.length = 10
      orderBookAsks.reverse()
      orderBookAsks.forEach(element => {
        orderBook.push({ rate: +element[0], askAmount: +element[1] })
      })
      orderBookbids.forEach(element => {
        orderBook.push({ rate: element[0], bidAmount: element[1] })
      })
      return orderBook
    }
  },
  methods: {
    ...mapActions('coincheck', [GET_ORDER]),
    async click() {
      await this.GET_ORDER()
      console.log(this.order)
      console.log(this.order.asks)

      let b = 0

      for (const i of this.order.asks) {
        b = b + Number(i[1])
      }
      let c = 0
      for (const i of this.order.bids) {
        c = c + Number(i[1])
      }
      console.log(b)
      console.log(c)

      this.items = this.orderBook
    }
  }
}
</script>

<style></style>
