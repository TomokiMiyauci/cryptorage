<template>
  <div>
    <v-btn @click="set"></v-btn>
    <p>{{ price }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: {}
    }
  },
  created() {
    this.getPrice()
    setInterval(() => {
      this.getPrice()
    }, 2000)
  },
  destroyed() {
    clearInterval(this.getPrice())
  },
  methods: {
    set() {
      setInterval(() => {
        this.i++
      }, 2000)
    },
    counter() {
      this.i++
    },
    async getPrice() {
      console.log(1)
      const price = await this.$axios.$get('http://localhost:3000/api/ticker')
      this.price = price
    }
  }
}
</script>

<style></style>
