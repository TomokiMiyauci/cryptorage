<template>
  <div>
    <v-list-tile v-for="item in items" :key="item.name" :to="item.link">
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.name }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      require: true,
      default: () => ({})
    }
  }
}
</script>

<style></style>
