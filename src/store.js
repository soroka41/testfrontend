import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import API from './API/API'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: []
  },
  mutations: {
    formData(state, userData) {
      state.userData = userData
    }
  },
  actions: {
    formUser({commit}, user) {
      return new Promise((resolve, reject) => {
      // this.state.user.push(userData)
      // console.log('store', user)
      Axios.get('./webserver/server.php')
        .then(response =>{
          // console.log('response', response.data)
          commit('formData', user)
          resolve(response)
        })
        .catch(response=> {
          // console.log(error)
          reject(response)
        })
      })
    },
  }
})
