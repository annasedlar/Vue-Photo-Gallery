import Vue from 'vue'
import Vuex from 'vuex'
import jsonData from '@/api.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    mainPhotoObj: jsonData[0],
    selectedPhotoURL: jsonData[0].url,
    selectedPhotoTitle: jsonData[0].title,
    selectedPhotoDescription: jsonData[0].description,
    selectedPhotoRating: jsonData[0].rating
  },
  mutations: {
    selectPhoto: (state, payload) => {
      state.mainPhotoObj = payload
    }
  },
  actions: {
    selectPhotoAction ({ commit }, payload) {
      commit('selectPhoto', payload)
      console.log(payload)
    }
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
