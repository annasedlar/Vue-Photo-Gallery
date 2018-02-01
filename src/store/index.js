import Vue from 'vue'
import Vuex from 'vuex'
import jsonData from '@/api.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    mainPhotoObj: jsonData[0]
  },
  
  mutations: {
    selectPhoto: (state, payload) => {
      state.mainPhotoObj = payload
    }
  },

  actions: {
    selectPhotoAction ({ commit }, payload) {
      commit('selectPhoto', payload)
      // console.log(payload)
    }
  },

  getters: {
    mainPhotoObj: state => state.mainPhotoObj
  }
})







// export const getters = {
//   mainPhoto (state) {
//     return state.mainPhotoObj
//   }
// }

// export const actions = {
//   setIsHeaderVisible ({ commit }, payload) {
//     commit('IS_HEADER_VISIBLE', payload)
//   }
// }

// export const mutations = {
//   IS_HEADER_VISIBLE (state, data) {
//     state.isHeaderVisible = data
//   }
// }
