import { createStore, createLogger } from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import module from './modules/module'

const store = new createStore({
  getters,
  mutations,
  modules: {
    module,
  },
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
})

export default store
