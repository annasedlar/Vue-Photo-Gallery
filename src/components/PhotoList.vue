<template>
  <div class="thumbnail-list">
      <h1>Photo Roll</h1>
        <ul>
        <li v-for="(photo, index) in photos" :key="index">
            <img :src="photo.url" @click="selectPhoto(photo)" />
            <p>{{photo.title}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
import jsonData from '../api.json'
import { mapActions } from 'vuex'

export default {

  name: 'PhotoList',
  data () {
    return {
      photos: jsonData,
      selectedPhoto: jsonData[0],
    }
  },
  methods: {
      selectPhoto(photo){
        this.$store.dispatch('selectPhotoAction', photo)
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.thumbnail-list{
height: 80%;
width: 40%;
border: 1px solid black;
float:left;
display:grid
}

img{
    height:40px;
    width: 40px;
    display: inline-flex
}

p{
    font-size:9px
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  height: 40px;
  width: 40px;
  margin: 0 20px;
}
a {
  color: #42b983;
}
</style>
