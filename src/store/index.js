import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import users from './users'
import shared from './shared'
import chat from './chat'
import boards from './boards'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user: user,
    users: users,
    shared: shared,
    chat: chat,
    boards: boards
  }
})
