import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      first_name: 'Jon',
      last_name: 'Stow',
      email: 'jon@stow.com'
    },
    cart: []
  },
  mutations: {
    //cart
      ADD_PRODUCT(state, payload) {
        const existingProduct = state.cart.find(o => o.id === payload.id)

        if (existingProduct){
          existingProduct.qty += 1
        }else{
          payload.qty = 1
          state.cart.push(payload) 
        }
      },
      REMOVE_PRODUCT(state, payload){
        const existingProduct = state.cart.find(o => o.id === payload.id)

        if (existingProduct && existingProduct.qty > 1){
          existingProduct.qty -= 1
        }else{
          const idx = state.cart.findIndex(o => o.id === payload.id)
          state.cart.splice(idx, 1)
        }
      },
    //user
    SAVE_FIRTS_NAME(state, payload){
      state.user.first_name = payload
    },
    SAVE_LAST_NAME(state, payload){
      state.user.last_name = payload
    }
  },
  actions: {
  },
  getters: {
    fullName(state, payload){
      return `${state.user.first_name} ${state.user.last_name}`
    }
  },
  modules: {
    users: {
      state: () => ({
        first_name: 'tiago'
      })
    }
  }
})
