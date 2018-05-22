<template>
    <v-container fluid>

         <v-layout row style="border 1px solid red">
    <v-flex xs12 sm12>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>view_module</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list two-line subheader>
          <v-subheader inset>Users</v-subheader>
          <v-list-tile v-for="user in users" :key="user.id" avatar @click="">
            <v-list-tile-avatar>
              <img v-if="user.photoUrl" :src="user.photoUrl">
              <img v-if="user.imgUrl" :src="user.imgUrl">
              <img v-if="!user.photoUrl && !user.imgUrl" src="../assets/avatar/default.png"/>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-if=" user.displayName">{{ user.displayName }}</v-list-tile-title>
              <v-list-tile-title v-else>{{ `${user.firstName} ${user.lastName}` }}</v-list-tile-title>
              <v-list-tile-sub-title> Total Messages : {{ user.messagesCount }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
         
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
    </v-container>
</template>
<script>
import {mapGetters} from 'vuex'
import Avatar from '@/components/utils/avatar.vue'
export default {
  component: {
    Avatar
  },
  data () {
    return {
      title: 'Users',
      items2: [
        { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
        { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      allUsers: 'allUsers',
      messages: 'messages'
    }),
    users () {
      return this.allUsers.map(user => {
        return {
          ...user,
          messagesCount: this.messages.filter(message => message.authorId === user.id).length
        }
      })
      .sort((user1, user2) => {
        return user1.messagesCount < user2.messagesCount
      })
    }
  }
}
</script>
<style lang="stylus"></style>