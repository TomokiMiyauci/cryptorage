<template>
  <div>
    <v-subheader>{{ subHeader }}</v-subheader>
    <v-list-tile v-for="item in items" :key="item.name" :to="item.link">
      <v-list-tile-avatar avatar>
        <v-avatar :size="avatarSize">
          <v-img :src="item.src"></v-img>
        </v-avatar>
      </v-list-tile-avatar>

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
    },
    subHeader: {
      type: String,
      require: true,
      default: ''
    },
    avatarSize: {
      type: String,
      default: '36px'
    }
  }
}
</script>

<style></style>
