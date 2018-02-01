<template>
  <div class="rating">
      <p>Rating: {{rating}} stars</p>
        <div class="right">
          <span class='stars' v-for="star in 5" :key="star">
            &#10025;
          </span>
        </div>
        <div class="right">
          <span class='stars overlay' v-for="star in rating" :key="star">
             &#9733;
          </span>
        </div>
  </div>
</template>

<script>
/* eslint-disable */
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
  font-size: 8px;
  z-index: 2
}

.right{
  position:absolute;
  left:0
}
</style>
