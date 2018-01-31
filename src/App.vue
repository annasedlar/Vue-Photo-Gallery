<template>
  <div id="app">
    <user-info></user-info>
    <photo-detail></photo-detail>
    <photo-list></photo-list>
  </div>
</template>

<script>
import PhotoDetail from './components/PhotoDetail'
import PhotoList from './components/PhotoList'
import UserInfo from './components/UserInfo'

export default {
  name: 'App',
  components: {
    PhotoDetail,
    PhotoList,
    UserInfo
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:auto;
  width: 800px;
}
</style>
