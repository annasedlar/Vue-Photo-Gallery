<template>
  <div class="user-detail">
      <h3>{{username}}</h3>
      <h3>{{firstName}} {{lastName}}</h3>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      username: 'asedlar@apple.com',
      firstName: 'Anna', 
      lastName: 'Sedlar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-detail{
  height: 20%;
  width: 40%;
  border: 1px solid black;
  float:left;
  display:block
}
</style>
