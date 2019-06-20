<template>
  <v-data-table :items="items" :headers="headers" loading hide-actions>
    <template #items="{item}">
      <td>{{ item.ticker }}</td>
      <td>{{ item.ask }}</td>
      <td>{{ item.spread }}</td>
      <td>{{ item.bid }}</td>
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      headers: [
        { text: 'Ticker', value: 'ticker' },
        { text: 'Ask', value: 'ask' },
        { text: 'Spread', value: 'spread' },
        { text: 'Bid', value: 'bid' }
      ]
    }
  }
}
</script>

<style></style>
