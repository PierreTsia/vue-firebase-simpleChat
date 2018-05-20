// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
const App = () => import('./App')
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import { mapActions } from 'vuex'
import VueChatScroll from 'vue-chat-scroll'

const AlertCmp = () => import('./components/Shared/Alert.vue')

Vue.use(Vuetify)
Vue.use(require('vue-moment'))
Vue.use(VueChatScroll)
Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  methods: {
    ...mapActions({
      fetchMessages: 'fetchMessages',
      fetchBoards: 'fetchBoards',
      fetchAllUsers: 'fetchAllUsers'
    })
  },
  created () {
    const config = {
      apiKey: 'AIzaSyB6bAF7V37eTcIoc7WPLz_XASFevQc7fhw',
      authDomain: 'vue-firebase-bd964.firebaseapp.com',
      databaseURL: 'https://vue-firebase-bd964.firebaseio.com',
      projectId: 'vue-firebase-bd964',
      storageBucket: 'vue-firebase-bd964.appspot.com',
      messagingSenderId: '338307905402'
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        console.log('user autosignin: ', user)
      }
    })
    this.fetchMessages()
    this.fetchBoards()
    this.fetchAllUsers()
  }
})
