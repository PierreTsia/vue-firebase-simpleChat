<template>
  <v-container fluid>
    <v-layout row>
      <v-flex class="left__panel" xs12 sm6>
        <v-layout column xs12>
          <UsersTable></UsersTable>
          <v-spacer></v-spacer>
          <ChatForm></ChatForm>
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
          if (!this.user) {
            return false
          }
          return this.user.id === message.authorId
        }
      },
      mounted () {
      }
    }
</script>
<style lang="stylus">
       
.messages__board, .left__panel
    height 90vh
.messages__board
  overflow-y scroll
  text-overflow ellipsis
  .message__container
    border 1px solid blue
    background-color white
    position relative
    display flex
    flex-direction column
    justify-content flex-end
      .messageComponent
        border 1px solid green
        height 120px
   
</style>
