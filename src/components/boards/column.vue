<template>
    <v-container fluid class="column">
        <v-layout row xs12>
             <h1>{{column.title}}</h1> 
        </v-layout>
       

    </v-container>
</template>
<script>
export default {
  props: {
    column: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
<style lang="stylus">
.column
    min-height 40vh
</style>