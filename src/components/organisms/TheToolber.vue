<template>
  <v-toolbar app flat fixed clipped-left>
    <v-toolbar-side-icon @click="switchDrawer" />
    <v-toolbar-title class="text-uppercase">
      <v-icon>fab fa-connectdevelop</v-icon>
      <span>Cryptorage</span>
    </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-tooltip-botton-icon
        v-for="i in items"
        :key="i.tooltip"
        :icon="i.icon"
        :tooltip="i.tooltip"
        :link="i.link"
      ></v-tooltip-botton-icon>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import VTooltipBottonIcon from '~/components/molecules/VTooltipBottonIcon'
export default {
  components: {
    VTooltipBottonIcon
  },
  data() {
    return {
      items: [
        { icon: 'fas fa-code-branch', tooltip: 'Loadmap', link: '/loadmap' },
        { icon: 'fab fa-github', tooltip: 'Github', link: '/acv' },
        { icon: 'logout', tooltip: 'Logout', link: '/logout' }
      ]
    }
  },
  methods: {
    switchDrawer() {
      this.$emit('switchDrawer')
    }
  }
}
</script>

<style></style>
