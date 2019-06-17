<template>
  <v-toolbar app flat fixed clipped-left>
    <v-toolbar-side-icon @click="switchDrawer" />
    <v-toolbar-title>Awesome Investor</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <div class="mt-2">
        <v-badge overlap>
          <template v-slot:badge>
            <span>1</span>
          </template>

          <v-btn icon>
            <v-icon>notifications</v-icon>
          </v-btn>
        </v-badge>
      </div>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>account_circle</v-icon>
          </v-btn>
        </template>
        <span>Profile</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>logout</v-icon>
          </v-btn>
        </template>
        <span>Logout</span>
      </v-tooltip>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    switchDrawer() {
      this.$emit('switchDrawer')
    }
  }
}
</script>

<style></style>
