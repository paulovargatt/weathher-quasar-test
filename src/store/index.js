import Vue from 'vue'
import Vuex from 'vuex'

// Use a new variable and export values to change default behaviour.
let store = null

Vue.use(Vuex)

// .. other code

export default function () {
  const Store = new Vuex.Store({
    namespaced: true,
    state: { answer: 5 },
    mutations: {
      increment: (state, payload) => {
        console.log('pay do mutations', payload)
        state.answer = payload
      }
    },
    actions: {
      increment (context, payload) {
        console.log('pay do action', payload)
        context.commit('increment', payload)
      }
    }

    // mutations / getters / plugins/ other code
  })

  // add this so that we export store
  store = Store

  // Quasar default
  return Store
}

// add this line to access store wherever you need
export { store }
