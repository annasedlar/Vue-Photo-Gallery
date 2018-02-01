<template>
  <div class="thumbnail-list">
      <h1>Photo Roll</h1>
        <ul>
        <li v-for="photo in photos" :key="photo">
            <img :src="photo.url" @click="selectPhoto(photo)" />
            <p>{{photo.title}}</p>
        </li>
      </ul>
  </div>
</template>

<script>

// import $ from 'jquery';
import jsonData from '../api.json'
import { EventBus } from '../eventBus.js'
import { mapState, mapGetters, mapActions } from 'vuex'
import store from '../store/index.js'


export default {
  /* eslint-disable */
  name: 'PhotoList',
  data () {
    return {
      photos: jsonData,
      selectedPhoto: jsonData[0],
    }
  },
  computed: {
      selectPhoto(photo){
        store.dispatch('selectPhotoAction')
        console.log('dispatched')
        // this.selectedPhoto = photo
        //   Here is where you will use VueX, for now, event bus
        // EventBus.$emit('selectedPhoto', this.selectedPhoto);
        // this.$store.commit('selectPhoto', this.selectedPhoto)
      },
      ...mapGetters([
            'mainPhoto',
        ]),
  },
  mounted:() => {
        // $.ajax({
        //     url: '../api.json',
        //     method: 'GET',
        //     success: function (data) {
        //         console.log("this returns plain index.html...? : '\n\n\n\n\n\n\n\n\n'" + data)
        //     },
        //     error: function (error) {
        //         console.log(error);
        //     }
        // });
        console.log(jsonData)
    },
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
