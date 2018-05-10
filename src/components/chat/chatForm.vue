<template>
    <div class="container">
        <h2>CHATFORM</h2>

        <textarea v-model="message"></textarea>
        <button class="btn btn-success" @click="handleSubmitPost">SUBMIT</button>


    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    handleSubmitPost () {
      if (!this.message.length) {
        return
      }
      const newMessage = {
        content: this.message,
        authorName: this.user.displayName ? this.user.displayName : this.user.email,
        authorId: this.user.id,
        date: Date()
      }
      console.log(newMessage)
      this.postMessage(newMessage)
      this.message = ''
    },
    ...mapActions({
      postMessage: 'postMessage'
    })

  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>
<style lang="stylus">
    .container 
        padding 10px
        border 1px solid red
</style>
