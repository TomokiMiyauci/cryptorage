<template>
  <v-card>
    <v-card-title class="headline">Spread</v-card-title>
    <v-data-table :items="items" :headers="headers" loading hide-actions>
      <template #items="{item}">
        <td class="text-xs-center">{{ item.ticker }}</td>
        <td class="text-xs-center">{{ item.ask | digit2 | camma }}</td>
        <td class="text-xs-center">{{ item.spread | digit2 | camma }}</td>
        <td class="text-xs-center">{{ item.bid | digit2 | camma }}</td>
      </template>
    </v-data-table>
  </v-card>
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
        { text: 'Ticker', value: 'ticker', align: 'center' },
        { text: 'Ask', value: 'ask', sortable: false, align: 'center' },
        { text: 'Spread', value: 'spread', align: 'center' },
        { text: 'Bid', value: 'bid', sortable: false, align: 'center' }
      ]
    }
  }
}
</script>

<style></style>
