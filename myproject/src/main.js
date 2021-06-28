// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
      info: null,
      errored: false
    }
  },
  mounted () {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
  }
})
/*
function find (n) {
  var response
  axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.data)
    .catch(error => {
      console.log(error)
      this.errored = true
    })
  return response
}
*/
