export const state = () => ({
  a: {}
})

export const mutations = {
  add(state, payload) {
    state.a = payload
  }
}

export const actions = {
  async getPrice({ commit }) {
    console.log(1)
    await this.$axios
      .$get('http://localhost:3000/api/ticker')
      .then(res => commit('add', res))
      .then(() => console.log(3))

    console.log(3)
  }
}
