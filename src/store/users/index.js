import * as firebase from 'firebase'

export default {
  state: {
    users: null,
    online: null
  },
  actions: {
    fetchAllUsers ({commit}) {
      firebase.database().ref('users').on('value', snapshot => {
        const firebaseUsers = snapshot.val()
        const users = []
        for (let key in firebaseUsers) {
          let user = firebaseUsers[key]
          users.push(user)
        }
        commit('setAllUsers', users)
      })
    }
  },
  mutations: {
    setAllUsers (state, payload) {
      state.users = payload
    }
  },
  getters: {
    allUsers: state => state.users
  }
}
