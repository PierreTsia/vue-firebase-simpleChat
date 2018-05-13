<template>
    <v-container class="boards">
        <span>{{test}}</span>
    </v-container>
</template>
<script>
export default {
  data () {
    return {
      test: 'this is a test'
    }
  }
}
</script>
<style lang="stylus">
    .boards
        margin-top 70px
        border 1px solid red
</style>