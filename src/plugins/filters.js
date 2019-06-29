import Vue from 'vue'

Vue.filter('digit2', function(value) {
  if (value) {
    return Math.round(value * 100) / 100
  } else return null
})
Vue.filter('camma', function(value) {
  if (value) {
    return value.toLocaleString()
  } else return null
})
