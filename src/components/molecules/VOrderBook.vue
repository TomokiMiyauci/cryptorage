<template>
  <v-data-table :headers="header" :items="items" loading hide-actions>
    <template #items="{item}">
      <td class="text-xs-center">{{ item.askAmount | digit2 | camma }}</td>
      <td class="text-xs-center">{{ item.rate | digit2 | camma }}</td>
      <td class="text-xs-center">{{ item.bidAmount | digit2 | camma }}</td>
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
      header: [
        {
          text: 'Ask',
          value: 'askAmount',
          align: 'center',
          sortable: false
        },
        { text: 'Rate', value: 'rate', align: 'center', sortable: false },
        {
          text: 'Bid',
          value: 'bidAmount',
          align: 'center',
          sortable: false
        }
      ]
    }
  }
}
</script>

<style></style>
