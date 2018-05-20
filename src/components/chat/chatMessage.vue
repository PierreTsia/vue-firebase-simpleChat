<template>
  <div>
    <v-layout v-if="userIsAuthor">
      <div class="message">
        <img 
          class="avatar"
          :src="message.authorPicture"/>
        <div class="message_content">
            <span class="message_content--message">{{message.content}}</span>
            <div class="message_content_tagline">
                <span class="message_content_tagline--author">{{message.authorName}}</span>
                <span class="message_content_tagline--time">{{message.date | moment("from", "now", true)}} ago</span> 
            </div>            
        </div>
      </div> 
    </v-layout>
    <v-layout v-else>
      <div class="message messageFromOtherUser">
       
        <div class="message_content">
            <span class="message_content--message">{{message.content}}</span>
            <div class="message_content_tagline">
                <span class="message_content_tagline--author">{{message.authorName}}</span>
                <span class="message_content_tagline--time">{{message.date | moment("from", "now", true)}} ago</span> 
            </div>            
        </div>
         <img 
          class="avatar"
          :src="message.authorPicture"/>
      </div> 
    </v-layout>
    
  </div>
</template>
<script>
  export default {
    props: {
      message: {
        type: Object,
        default: () => {}
      },
      userIsAuthor: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        mockMessage: 'Bonjour, comment ça va ?'
      }
    }
  }
</script>
<style lang="stylus">

  .avatar
    width 60px
    height 60px
    border-radius 50%

  .messageFromOtherUser
    justify-content flex-end
    text-align right
  .message
    display flex
    flex-direction row
    padding 10px
    align-items center
    width 100%

    .message_content
        padding 10px
        display flex
        flex-direction column
        .message_content--message
            font-size 1.3em
            font-weight bolder
        .message_content_tagline
            display flex
            flex-direction column
            .message_content_tagline--time
                font-style italic

</style>