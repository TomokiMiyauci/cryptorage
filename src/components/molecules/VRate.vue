<template>
  <v-card>
    <v-card-title class="headline">Sales Rate</v-card-title>
    <v-data-table :items="items" :headers="headers" loading hide-actions>
      <template #items="{item}">
        <td class="text-xs-center">{{ item.pair }}</td>
        <td class="text-xs-center">{{ item.rate | digit2 | camma }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { GET_STORE_RATE, pairs } from '~/store/mutation-types'
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      items: [],
      headers: [
        { text: 'Ticker', value: 'pair', align: 'center' },
        { text: 'Rate', value: 'rate', sortable: false, align: 'center' }
      ],
      id: null
    }
  },
  computed: {
    ...mapState('coincheck', ['storeRate'])
  },
  created() {
    this.click()
    this.id = setInterval(() => this.click(), 5000)
  },
  beforeDestroy() {
    clearInterval(this.id)
  },

  methods: {
    ...mapActions('coincheck', [GET_STORE_RATE]),
    async click() {
      for (const [index, pair] of pairs.entries()) {
        await this.GET_STORE_RATE(pair.pair)
        this.items.splice(index, 1, {
          pair: pair.pair
            .split('_')
            .join('')
            .toUpperCase(),
          rate: this.storeRate.rate
        })
      }
    }
  }
}
</script>

<style></style>
