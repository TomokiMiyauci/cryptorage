<template>
  <div>
    <v-card>
      <v-card-title class="headline">Trade Simulator</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-radio-group
            v-model="orderType"
            value="justify-center"
            :rules="[v => !!v || 'required']"
            row
          >
            <v-radio label="Buy" value="buy"></v-radio>
            <v-radio label="Sell" value="sell"></v-radio>
          </v-radio-group>

          <v-radio-group v-model="pair" :rules="[v => !!v || 'required']" row>
            <v-radio label="BTCJPY" value="btc_jpy"></v-radio>
          </v-radio-group>
          <v-radio-group
            v-model="priceOrAmount"
            :rules="[v => !!v || 'required']"
            row
          >
            <v-radio label="Amount" value="amount"></v-radio>
            <v-radio label="Price" value="price"></v-radio>
          </v-radio-group>
          <v-text-field
            v-model="text"
            outline
            :label="priceAmount"
            :disabled="disabled"
            :rules="[
              v => !!v || 'required',
              v => /^\d+$/.test(v) || 'Number only'
            ]"
            :suffix="suffix"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn :disabled="!valid" @click="click">Submit</v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-if="price">
      <v-card-title class="headline">Result</v-card-title>
      <v-card-text>
        Rate:{{ price.rate }} Amount:{{ price.amount }} Price:{{ price.price }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { GET_PRICE } from '~/store/mutation-types'
import { mapState, mapActions } from 'vuex'

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
export default {
  data() {
    return {
      valid: false,
      orderType: null,
      pair: null,
      priceOrAmount: null,
      text: null
    }
  },
  computed: {
    priceAmount: function() {
      return this.priceOrAmount ? capitalize(this.priceOrAmount) : null
    },
    disabled: function() {
      return !this.priceOrAmount
    },
    suffix: function() {
      if (this.pair && this.priceOrAmount === 'amount') {
        return this.pair.substr(0, 3).toUpperCase()
      } else if (this.pair && this.priceOrAmount === 'price') {
        return this.pair.substr(4, 3).toUpperCase()
      }
      return null
    },
    ...mapState('coincheck', ['price'])
  },
  methods: {
    ...mapActions('coincheck', [GET_PRICE]),
    async click() {
      if (this.$refs.form.validate()) {
        await this.GET_PRICE({
          pair: this.pair,
          orderType: this.orderType,
          [this.priceOrAmount]: this.text
        })
      }
    }
  }
}
</script>

<style></style>
