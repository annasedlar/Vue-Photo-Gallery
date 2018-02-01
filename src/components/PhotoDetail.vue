<template>
  <div class="photo-detail">
      <div class="img-container" @click="testing()">
          <img :src="selectedPhotoURL"/>
          <h1 v-if="selectedPhotoTitle">{{selectedPhotoTitle}}</h1>
          <h1 v-else>Untitled</h1>
            <PhotoDescription :description="selectedPhotoDescription"></PhotoDescription>
            <Rating :rating="selectedPhotoRating"></Rating>
      </div>
  </div>
</template>

<script>
/* eslint-disable */
import Rating from './Rating.vue';
import PhotoDescription from './PhotoDescription.vue';
import jsonData from '../api.json';
import { EventBus } from '../eventBus.js';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    name: 'PhotoDetail',
    components: {
        Rating,
        PhotoDescription
    },         
    data () {
        return {
            mainPhotoObj: jsonData[0],
            selectedPhotoURL: jsonData[0].url,
            selectedPhotoTitle: jsonData[0].title,
            selectedPhotoDescription: jsonData[0].description,
            selectedPhotoRating: jsonData[0].rating
        }
    },
    computed: {
        ...mapGetters([
            'mainPhoto',
        ]),
    },
    methods: {
        displayPhoto(){
            console.log('display main photo')
            // return this.$store.getters.mainPhoto
            store.dispatch('selectPhotoAction')
        }
    },
    created () {
        // Listen for the selectedPhoto event and its payload.
        // let self = this;
        // EventBus.$on('selectedPhoto', photo => {
        //     self.mainPhotoObj = photo 
        //     this.$nextTick(function() {
        //         this.selectedPhotoURL = self.mainPhotoObj.url
        //         this.selectedPhotoTitle = self.mainPhotoObj.title
        //         this.selectedPhotoDescription = self.mainPhotoObj.description
        //         this.selectedPhotoRating = self.mainPhotoObj.rating
        //     });
        this.displayPhoto()
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
