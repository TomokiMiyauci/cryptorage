<template>
  <v-navigation-drawer app fixed clipped :mini-variant="drawer">
    <v-list-action-content :items="utils"></v-list-action-content>
    <v-divider></v-divider>

    <v-list-avatar-content
      sub-header="Market"
      :items="markets"
    ></v-list-avatar-content>
    <v-divider></v-divider>

    <v-list-avatar-content
      sub-header="Coin"
      :items="coins"
    ></v-list-avatar-content>
  </v-navigation-drawer>
</template>

<script>
import VListActionContent from '~/components/molucules/VListActionContent'
import VListAvatarContent from '~/components/molucules/VListAvatarContent'
export default {
  components: {
    VListAvatarContent,
    VListActionContent
  },
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    utils: [
      { name: 'Markets', link: '/markets', icon: 'account_balance' },
      { name: 'Coins', link: '/coins', icon: 'monetization_on' }
    ],
    markets: [
      {
        name: 'Coincheck',
        src: require('~/assets/logos/mini/coincheck.jpg'),
        link: '/markets/coincheck'
      },
      {
        name: 'Zaif',
        src: require('~/assets/logos/mini/zaif.png'),
        link: '/markets/coincheck'
      },
      {
        name: 'bitbank',
        src: require('~/assets/logos/mini/bitbank.jpg'),
        link: '/markets/coincheck'
      },
      {
        name: 'bitFlyer',
        src: require('~/assets/logos/mini/bitflyer.jpg'),
        link: '/markets/coincheck'
      },
      {
        name: 'BitPoint',
        src: require('~/assets/logos/mini/bitpoint.jpg'),
        link: '/markets/coincheck'
      }
    ],
    coins: [
      {
        name: 'Bitcoin',
        src: require('~/assets/coins/btc.png'),
        link: 'coins/bitcoin'
      },
      {
        name: 'Ethrium',
        src: require('~/assets/coins/eth.png'),
        link: 'coins/ethrium'
      },
      {
        name: 'Ethrium Classic',
        src: require('~/assets/coins/etc.png'),
        link: 'coins/ethrium'
      },
      {
        name: 'Ripple',
        src: require('~/assets/coins/xrp.png'),
        link: 'coins/ethrium'
      },
      {
        name: 'Dash',
        src: require('~/assets/coins/dash.png'),
        link: 'coins/ethrium'
      },
      {
        name: 'Lisk',
        src: require('~/assets/coins/lsk.jpg'),
        link: 'coins/ethrium'
      },
      {
        name: 'Litecoin',
        src: require('~/assets/coins/ltc.png'),
        link: 'coins/ethrium'
      },
      {
        name: 'MONAcoin',
        src: require('~/assets/coins/mona.png'),
        link: 'coins/ethrium'
      },
      {
        name: 'Augar',
        src: require('~/assets/coins/rep.png'),
        link: 'coins/ethrium'
      },
      {
        name: 'NEM',
        src: require('~/assets/coins/xem.webp'),
        link: 'coins/ethrium'
      },
      {
        name: 'Monero',
        src: require('~/assets/coins/xmr.png'),
        link: 'coins/ethrium'
      },
      {
        name: 'ZCash',
        src: require('~/assets/coins/zsh.png'),
        link: 'coins/ethrium'
      }
    ]
  })
}
</script>
