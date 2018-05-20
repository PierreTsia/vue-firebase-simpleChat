<template>
  <v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-text>
          <div class="text-md-center">
            <v-icon large color="green darken-2">check_circle</v-icon>
              <h1 class="green--text">Login Success</h1>
              <h4 v-if="user.displayName"class="headline mb-0"><b class="red--text">Name :</b> {{ user.displayName }}</h4>
              <h4 v-else class="headline mb-0"><b class="red--text">Name :</b> {{`${user.firstName} ${user.lastName}` }}</h4>
              <h4 v-if="user.email" class="headline mb-0"><b class="red--text">Email :</b> {{ user.email }}</h4>
              <img v-if="user.imgUrl" class="avatar_pic" :src="user.imgUrl"/>
              <img v-else class="avatar_pic" :src="user.photoUrl"/>
          </div>
        </v-card-text>
     </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      }
    }
  }
</script>
<style lang="stylus">
.avatar_pic
  width 50px
  height 50px
  border-radius 50%
</style>
