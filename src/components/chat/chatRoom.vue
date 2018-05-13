<template>
    <div>
        <div class="chatForm_container">
          <ChatForm></ChatForm>
        </div>

      <div class="chatRoom_container">
        <ChatMessage 
          v-for="message in lastMessages"
          :message="message"
          :userIsAuthor="userIsAuthor(message)">
        </ChatMessage>   
      </div>
                


    </div>
</template>
<script>
    import ChatForm from '@/components/chat/chatForm.vue'
    import ChatMessage from '@/components/chat/chatMessage.vue'
    import {mapGetters} from 'vuex'
    export default {

      components: {
        ChatForm,
        ChatMessage
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
            return this.messages.sort((msg1, msg2) => {
              return msg1.date < msg2.date
            })
          } else {
            return this.messages.slice(lastIndex - 10, lastIndex)
            .sort((message1, message2) => {
              return message1.date < message2.date
            })
          }
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
       
    .myMessage
        text-align right
        width 100%
    .otherUserMessage
        text-align left
        width 100%
    .chatForm_container
      position fixed
      bottom 0px
      left 0px
      height 93.5%
      width 30%
      background-color rgba(192,192,192, 0.3)
      

    .chatRoom_container
      width 70%
      position absolute
      top 35px
      left 30%
    
</style>
