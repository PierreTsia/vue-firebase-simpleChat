import firebase from 'firebase'

export default {
  state: {
    boards: []
  },
  mutations: {
    ADD_BOARD_SUCCESS (state, payload) {
      state.boards.push(payload)
    },
    FETCH_BOARDS_SUCCESS (state, payload) {
      console.log('payload boards', payload)
      state.boards = payload
    }
  },
  actions: {
    addBoard ({commit}, newBoard) {
      console.log('newMessage', newBoard)
      let key
      firebase.database().ref('boards').push(newBoard)
      .then(data => {
        key = data.key
        console.log(data.val())
        return key
      })
      /* .then(key => {
        firebase.database().ref('/boards/' + key).once('value', snapshot => {
          console.log('snap boards', snapshot.val())
        })
      }) */
    },
    deleteBoard ({commit}, boardId) {
      firebase.database().ref('boards/' + boardId).remove()
    },
    fetchBoards ({commit}) {
      firebase.database().ref('/boards').on('value', snapshot => {
        const response = snapshot.val()
        const boards = []
        for (let key in response) {
          boards.push({
            id: key,
            title: response[key].title,
            description: response[key].description,
            authorName: response[key].authorName,
            authorId: response[key].authorId,
            date: response[key].date,
            imageUrl: response[key].imageUrl
          })
        }
        console.log('response', response)
        commit('FETCH_BOARDS_SUCCESS', boards)
      })
    }
  },
  getters: {
    boards: state => state.boards
  }
}
