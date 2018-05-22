<template>
    <v-container fluid class="mx-0 px-0 pt-0">
        <v-jumbotron  dark :src="currentBoard.imageUrl">
            <v-container fill-height>
                <v-layout class="board__header" align-center>
                    <v-flex>
                        <h3 class="display-3" >{{currentBoard.title}}</h3>
                        <span class="subheading">{{currentBoard.description}}</span>
                        <v-divider class="my-3"></v-divider>
                        <div class="board__ header__actions">
                            <v-layout row xs12 justify-center>
                                <v-flex xs6 sm1 class="mx-1">
                                    <v-btn  center fab small color="primary" class="mt-5 mx-0">
                                        <v-icon dark>edit</v-icon>
                                    </v-btn> 
                            </v-flex>
                        <v-flex xs6 sm1 class="mx-1">
                            <v-btn @click.stop="dialog2 = true" small center fab color="warning" class="mt-5 mx-0">
                            <v-icon dark>view_column</v-icon>
                        </v-btn> 
                        </v-flex>
                            <v-flex xs6 sm1 class="mx-1">
                            <v-btn  small center fab color="red" class="mt-5 mx-0">
                            <v-icon dark>person_add</v-icon>
                        </v-btn> 
                        </v-flex>

                        <v-dialog v-model="dialog2" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    Add a New Column
                                </v-card-title>
                
                                <v-card-text>
                                    <v-form ref="form">
                                        <v-text-field
                                            v-model="title"
                                            label="title"
                                            required>
                                        </v-text-field>
                                    
                                        <v-text-field
                                            v-model="subTitle"
                                            label="Sub-title"
                                            required>
                                        </v-text-field>
                                    
                                    </v-form>
                                </v-card-text>
                                <v-card-actions justify-center>
                                    <v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn color="error"  @click.stop="handleAddColumn">Add Column</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-layout>
                </div>
                </v-flex>
            </v-layout>
            </v-container>
        </v-jumbotron>
    
        <v-container fluid class="column_wrapper mb-1" fill-width>
            <v-layout row xs12 wrap>
                <v-flex xs12 sm4 v-for="column in columns" class="mx-1">
                    
                </v-flex>

            </v-layout>
        
        </v-container>



         <v-container fluid grid-list-md text-xs-center>
    <v-layout row wrap>
     
      <v-flex v-for="column in columns" :key="`4${column.id}`" xs4>
        <v-card light color="blue lighten-5">
          <v-card-text class="px-0"></v-card-text>
          <Column :column="column"></Column>
        </v-card>
      </v-flex>
     
      
    </v-layout>
  </v-container>
    </v-container>
    
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import Column from '@/components/boards/column.vue'
export default {
  components: {
    Column
  },
  data () {
    return {
      title: '',
      subTitle: '',
      boardId: null,
      dialog2: false
    }
  },
  computed: {
    ...mapGetters({
      boards: 'boards',
      user: 'user',
      currentBoard: 'currentBoard',
      columns: 'currentBoardColumns'
    })
  },
  methods: {
    ...mapActions({
      fetchBoardById: 'fetchBoardById',
      addColumn: 'addColumn'
    }),
    handleAddColumn () {
      const newColumn = {
        boardId: this.currentBoard.id,
        title: this.title,
        subTitle: this.subTitle,
        createdOn: Date(),
        authorId: this.user.id
      }
      console.log(newColumn)
      this.addColumn(newColumn)
      this.title = ''
      this.subTitle = ''
      this.dialog2 = false
    }
  },
  mounted () {
    this.boardId = this.$route.params.id
    this.fetchBoardById(this.boardId)
  }
}
</script>
<style lang="stylus">
.board__header
  padding 50px
  background-color rgba(grey, 0.5)
  text-align center
  .board__header__actions
    border 1px solid red !important
.column_wrapper
    display flex
    flex-direction row
    justify-content flex-end 


</style>