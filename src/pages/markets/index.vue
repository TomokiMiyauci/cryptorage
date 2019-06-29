<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <v-flex v-for="i in markets" :key="i.name" xs4 d-flex>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            width="344"
            to="/"
          >
            <v-img :aspect-ratio="16 / 9" :src="i.logo">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  {{ i.name }}
                </div>
              </v-expand-transition>
            </v-img>
            <v-divider></v-divider>
            <v-card-title>
              <v-avatar
                v-for="currency in coins"
                :key="currency.name"
                size="36px"
              >
                <v-img :src="currency.logo" alt="Avatar" />
              </v-avatar>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      markets: [
        { logo: require('~/assets/logos/coincheck.png'), name: 'Coincheck' },
        { logo: require('~/assets/logos/zaif.png'), name: 'Zaif' },
        { logo: require('~/assets/logos/bitbank.png'), name: 'bitbank' },
        { logo: require('~/assets/logos/bitflyer.png'), name: 'bitflyer' },
        { logo: require('~/assets/logos/bitpoint.png'), name: 'bitpoint' },
        { logo: require('~/assets/logos/quoinx.jpg'), name: 'quoinx' }
      ],
      coins: [
        { logo: require('~/assets/coins/btc.png'), name: 'btc' },
        { logo: require('~/assets/coins/xrp.png'), name: 'xrp' },
        { logo: require('~/assets/coins/eth.png'), name: 'eth' },
        { logo: require('~/assets/coins/etc.png'), name: 'etc' }
      ]
    }
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
