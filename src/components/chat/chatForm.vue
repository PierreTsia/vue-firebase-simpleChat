<template>
    <div class="container">
        <h2>CHATFORM</h2>
         <v-container fluid>
            <v-layout column>
              <v-flex xs4>
              <v-subheader>Enter your message here :</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  box
                  multi-line
                  v-model="message"
                  id="message"
                  name="input-1"
                  label="My message..."
                ></v-text-field>
              </v-flex>
              <v-btn 
                @click="handleSubmitPost"
                color="info">Submit</v-btn>
            </v-layout>
          </v-container>
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
        authorName: this.user.displayName ? this.user.displayName : `${this.user.firstName} ${this.user.lastName}`,
        authorId: this.user.id,
        authorPicture: this.user.imgUrl ? this.user.imgUrl : this.user.photoUrl,
        date: Date()
      }
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

  

</style>
