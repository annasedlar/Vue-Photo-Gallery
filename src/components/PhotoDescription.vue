<template>
  <div class="description">
      <p><strong>Description: </strong>{{description}} </p>
  </div>
</template>

<script>
export default {
  name: 'PhotoDescription',
  props: ['description'],
  // data () {
  //   return {
  //     description: ''
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.description{
  float:left;
  width: 50%;
}
</style>
