<template>
    <div>
        <img 
          class ="avatar__pic" 
          :src="avatar"/>
          <h1>{{avatar}}</h1>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    userPic: {
      type: String,
      default: '../../assets/avatar/default'
    }
  }
}
</script>
<style lang="stylus">
.avatar__pic
    width 30px
    height 30px
    border-radius 50%

</style>