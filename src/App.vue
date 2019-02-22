<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from './components/Tabbar.vue'
export default {
  components:{
    Tabbar
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
