<template>
  <v-app>
    <the-toolber @switchDrawer="drawer = !drawer" />
    <the-navber :drawer="drawer" />
    <the-app />
    <the-footer />
  </v-app>
</template>

<script>
import TheToolber from '~/components/organisms/TheToolber'
import TheNavber from '~/components/organisms/TheNavber'
import TheFooter from '~/components/organisms/Thefooter'
import TheApp from '~/components/organisms/TheApp'
export default {
  components: {
    TheToolber,
    TheNavber,
    TheFooter,
    TheApp
  },
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style></style>
