<template>
  <div class="photo-detail">
      <div class="img-container" @click="testing()">
            <img :src="mainPhotoObj.url"/>
            <h1 v-if="mainPhotoObj.title">{{mainPhotoObj.title}}</h1>
            <h1 v-else>Untitled</h1>
            <PhotoDescription :description="mainPhotoObj.description"></PhotoDescription>
            <Rating :rating="mainPhotoObj.rating"></Rating>
      </div>
  </div>
</template>

<script>
import Rating from './Rating.vue';
import PhotoDescription from './PhotoDescription.vue';
import jsonData from '../api.json';
import { mapGetters } from 'vuex';

export default {
    name: 'PhotoDetail',
    components: {
        Rating,
        PhotoDescription
    },
    computed: {
        ...mapGetters([
            "mainPhotoObj"
        ]),
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photo-detail {
    height: 100%;
    width: 58%;
    display: inline-block;
    float: right;
}

.img-container {
    height: 420px;
    width: 700px;
    margin: auto;
}

img{
    max-width:100%;
    max-height:100%;
}
</style>
