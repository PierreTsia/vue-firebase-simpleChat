import firebase from 'firebase'

export default {
  state: {
    boards: [],
    curentBoard: null,
    currentBoardColumns: []
  },
  mutations: {
    ADD_BOARD_SUCCESS (state, payload) {
      state.boards.push(payload)
    },
    FETCH_BOARDS_SUCCESS (state, payload) {
      state.boards = payload
    },
    FETCH_CURRENTBOARD_SUCCESS (state, payload) {
      state.curentBoard = payload
    },
    FETCH_CURRENTBOARD_COLUMNS_SUCESS (state, payload) {
      state.currentBoardColumns = payload
    }
  },
  actions: {
    addBoard ({commit}, newBoard) {
      let key
      firebase.database().ref('boards').push(newBoard)
      .then(data => {
        key = data.key
        return key
      })
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
            imageUrl: response[key].imageUrl,
            columns: response[key].columns
          })
        }
        commit('FETCH_BOARDS_SUCCESS', boards)
      })
    },
    fetchBoardById ({commit}, boardId) {
      firebase.database().ref('boards/').child(boardId).on('value', snapshot => {
        const board = snapshot.val()
        commit('FETCH_CURRENTBOARD_SUCCESS', {id: boardId, ...board})
        const columns = []
        for (let key in board.columns) {
          columns.push({
            id: key,
            authorId: board.columns[key].authorId,
            createdOn: board.columns[key].createdOn,
            title: board.columns[key].title,
            subTitle: board.columns[key].subTitle
          })
        }
        commit('FETCH_CURRENTBOARD_COLUMNS_SUCESS', columns)
      })
    },
    addColumn ({commit}, newColumn) {
      firebase.database().ref('boards/' + newColumn.boardId).child('columns').push(newColumn)
      .then(snapshot => {
        console.log(snapshot.val())
      })
      .catch(error => console.log(error))
    }
  },
  getters: {
    boards: state => state.boards,
    currentBoard: state => state.curentBoard,
    currentBoardColumns: state => state.currentBoardColumns
  }
}
