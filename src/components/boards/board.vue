<template>
   <v-layout row wrap>
    <v-flex xs12>
      <v-card>
        <v-card-media
          :src="board.imageUrl"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{board.title}}</div>
            <span class="blue--text">{{board.description}}</span><br>
            <span class="grey--text">Creation date : {{board.date | moment("DD MMMM YYYY")}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn round color="purple">Edit Board</v-btn>
          <v-spacer></v-spacer>
          <v-btn  
            @click="handleDeleteBoard(board)" 
            color="red">Delete Board</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

</template>
<script>
import {mapActions} from 'vuex'
export default {
  props: {
    board: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      test: 'test message here from NewBoard.vue'
    }
  },
  methods: {
    ...mapActions({
      deleteBoard: 'deleteBoard'
    }),
    handleDeleteBoard (board) {
      this.deleteBoard(board.id)
    }
  }
}
</script>
<style lang="stylus">


  

</style>