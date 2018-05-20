<template>
    <v-container fluid class="boards">
      <v-layout row wrap>
        <v-flex
          xs12 sm6 lg4
          center
          v-for="board in boards">
           <Board 
          class="board_card"
          :board="board">
        </Board>
        </v-flex>
         
      </v-layout>
      
        <v-btn color="primary" dark @click.stop="dialog2 = true">Create a New Board</v-btn>
          <v-dialog v-model="dialog2" max-width="500px">
            <v-card>
            <v-card-title>
              Add a New Board
            </v-card-title>
            <v-card-text>
            <v-form ref="form">
            <v-text-field
            v-model="title"
            label="Title"
            required
            ></v-text-field>
            <v-text-field
            v-model="description"
            label="description"
            required
            ></v-text-field>
            <v-text-field
            v-model="imageUrl"
            label="Image URL"
            required
            ></v-text-field>
            </v-form>
            </v-card-text>
            <v-card-actions justify-center>
                <v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
                <v-btn color="error"  @click.stop="handleAddBoard">Add Board</v-btn>
            </v-card-actions>
            </v-card>
      </v-dialog>
        
    </v-container>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import Board from '@/components/boards/board.vue'
export default {
  components: {
    Board
  },
  data () {
    return {
      dialog2: false,
      title: '',
      description: '',
      imageUrl: ''
    }
  },
  methods: {
    handleAddBoard () {
      const newBoard = {
        title: this.title,
        description: this.description,
        authorName: this.user.displayName ? this.user.displayName : this.user.email,
        authorId: this.user.id,
        imageUrl: this.imageUrl,
        tasks: [],
        date: Date()
      }
      console.log(newBoard)
      this.addBoard(newBoard)
      this.dialog2 = false
    },
    ...mapActions({
      addBoard: 'addBoard'
    })
  },
  computed: {
    ...mapGetters({
      user: 'user',
      boards: 'boards'
    })
  }
}
</script>
<style lang="stylus">
    .boards
        border 1px solid red
        padding 0
        margin 0
        margin-top 70px
    .board_card
      margin 10px

</style>