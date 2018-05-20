import firebase from 'firebase'

export default {
  state: {
    messages: []
  },
  mutations: {
    POST_MESSAGE (state, payload) {
      state.messages.push(payload)
    },
    FETCH_MESSAGES_SUCCESS (state, payload) {
      console.log('payload', payload)
      state.messages = payload
    }
  },
  actions: {
    postMessage ({commit}, newMessage) {
      console.log('newMessage', newMessage)
      let key
      firebase.database().ref('/chat/messages').push(newMessage)
      .then(data => {
        key = data.key
        return key
      })
      .then(key => {
        firebase.database().ref('/chat/messages/' + key).once('value', snapshot => {
          console.log('snap', snapshot.val())
          // commit('POST_MESSAGE', snapshot.val())
        })
      })
    },
    fetchMessages ({commit}) {
      firebase.database().ref('/chat/messages/').on('value', snapshot => {
        const response = snapshot.val()
        const messages = []
        for (let key in response) {
          messages.unshift({
            id: key,
            content: response[key].content,
            authorName: response[key].authorName,
            authorId: response[key].authorId,
            authorPicture: response[key].authorPicture,
            date: response[key].date
          })
        }
        commit('FETCH_MESSAGES_SUCCESS', messages)
      })
    }
  },
  getters: {
    messages: state => state.messages
  }
}
