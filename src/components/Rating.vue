<template>
  <div class="rating">
      <p>Rating: {{rating}} stars</p>
      <span class='stars' v-for="star in 5">
        &#10025;
      </span>
      <span class='stars overlay' v-for="star in rating">
        &#9733;
      </span>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props:['rating'],
  data () {
    return {
      msg: 'star star star'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.rating{
  float:right;
  display:inline-block;
  position:relative;
}

.stars{
  font-size:9px;
  z-index: 0;
  position:relative;
}

.overlay{
  position: relative;
  z-index: 2
}
</style>
