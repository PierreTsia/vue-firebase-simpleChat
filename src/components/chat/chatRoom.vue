<template>
  <v-container fluid>
    <v-layout row>
      <v-flex class="left__panel" xs12 sm6>
        <v-layout column xs12>
          <ChatForm></ChatForm>
          <v-spacer></v-spacer>
          <UsersTable></UsersTable>
        </v-layout>
        
      </v-flex>
      <v-flex class="messages__board" xs12 sm6>
          <div  v-chat-scroll class="message__container">
            <v-spacer></v-spacer>
            <ChatMessage
            class="messageComponent"
            v-for="message in messages"
            :key="message.id"
            :message="message"
            :userIsAuthor="userIsAuthor(message)">
        </ChatMessage>          
   </div>
     
      </v-flex> 
    </v-layout>  
  </v-container>

</template>
<script>
    import ChatForm from '@/components/chat/chatForm.vue'
    import ChatMessage from '@/components/chat/chatMessage.vue'
    import UsersTable from '@/components/usersTable.vue'
    import {mapGetters} from 'vuex'
    export default {

      components: {
        ChatForm,
        ChatMessage,
        UsersTable
      },
      data () {
        return {
          message: 'Coucou'
        }
      },
      computed: {
        ...mapGetters({
          messages: 'messages',
          user: 'user'
        }),
        lastMessages () {
          const lastIndex = this.messages.length
          if (this.messages.length <= 10) {
            return this.messages.slice(lastIndex, lastIndex - 10)
          }
        },
        reverseMessages () {
          return this.messages.reverse()
        }
      },
      methods: {
        userIsAuthor (message) {
          return this.user.id === message.authorId
        }
      },
      mounted () {
      }
    }
</script>
<style lang="stylus">
       
.messages__board, .left__panel
    margin-top 50px
    height 90vh
   
.messages__board
  overflow-y scroll
  overflow hidden
    .message__container
      border 1px solid blue
      position relative
      height 100%
      bottom 0px
      display flex
      flex-direction column
      justify-content flex-end
      .messageComponent
        border 1px solid green
        height 120px
   
</style>
