<template>
  <div>
    <v-layout row wrap>
      <v-data-table :headers="headers" :items="items">
        <template #items="{item}">
          <td class="text-md-center">{{ item.last }}</td>
          <td class="text-md-center">{{ item.ask }}</td>
          <td class="text-md-center">{{ item.high }}</td>
          <td class="text-md-center">{{ item.bid }}</td>
        </template>
      </v-data-table>
    </v-layout>
    <v-btn color="success" @click="click">text</v-btn>
    {{ a }}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      headers: [
        { text: 'Ticker', align: 'center', sortable: false, value: 'last' },
        { text: 'Bid', align: 'center', sortable: false, value: 'bid' },
        { text: 'Spread', align: 'center', sortable: false, value: 'high' },
        { text: 'Ask', align: 'center', sortable: false, value: 'ask' }
      ],
      items: []
    }
  },
  computed: {
    ...mapState('coin', ['a'])
  },
  methods: {
    ...mapActions('coin', ['getPrice']),
    async click() {
      await this.getPrice()
      this.items.splice(0, 1, this.a)
      // Object.assign(this.items[0], this.a)
      console.log(this.items)
    }
  }
}
</script>

<style></style>
