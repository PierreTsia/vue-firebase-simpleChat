<template>
    <div>
       
             <v-list three-line>
              <template              
                v-for="(message, index) in lastMessages">
                <v-subheader>
                     
                </v-subheader>
              
                <v-list-tile>
               
                  <v-list-tile-content>
                    <v-list-tile-title 
                      :class="{
                        'myMessage': userIsAuthor(message),
                        'otherUserMessage': !userIsAuthor(message)
                      }"
                      v-html="message.content"></v-list-tile-title>
                    <v-list-tile-sub-title 
                      :class="{
                        'myMessage': userIsAuthor(message),
                        'otherUserMessage': !userIsAuthor(message)
                      }"
                      v-html="message.authorName">
                    </v-list-tile-sub-title>
                    <v-list-tile-sub-title 
                      :class="{
                        'myMessage': userIsAuthor(message),
                        'otherUserMessage': !userIsAuthor(message)
                      }"
                      >{{message.date | moment("from", "now", true)}} ago
                    </v-list-tile-sub-title>
                    
                  </v-list-tile-content>
                </v-list-tile>
              </template>
                <v-divider></v-divider>
        </v-list>
              
                

        <ChatForm></ChatForm>


    </div>
</template>
<script>
    import ChatForm from '@/components/chat/chatForm.vue'
    import {mapGetters} from 'vuex'
    export default {

      components: {
        ChatForm
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
          return this.messages.slice(lastIndex - 10, lastIndex)
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
    h1
        color red
    .myMessage
        text-align right
        width 100%
    .otherUserMessage
        text-align left
        width 100%
</style>
