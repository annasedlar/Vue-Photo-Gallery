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
    }
  },

  getters: {
    mainPhotoObj: state => state.mainPhotoObj
  }
})
