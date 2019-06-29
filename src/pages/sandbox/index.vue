<template>
  <div>
    <v-container grid-list-xl>
      <v-layout wrap row>
        <v-flex xs4>
          <v-trade></v-trade>
        </v-flex>
        <v-flex xs3>
          <v-rate></v-rate>
        </v-flex>
        <v-flex xs8>
          <v-layout wrap row>
            <v-flex></v-flex>
            <v-flex></v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs-5></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VTrade from '~/components/molecules/VTrade'
import VRate from '~/components/molecules/VRate'
export default {
  components: {
    VTrade,
    VRate
  }
}
</script>

<style></style>
