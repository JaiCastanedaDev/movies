<template>
<div v-if="movies.length > 0" class="video-container">
    <img :src="`https://image.tmdb.org/t/p/w500${movies[0].poster_path }`">
</div>
</template>
<script>
import { fetchMovies } from './api.js'

export default {
  name: 'OtroComponente',
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    this.movies = await fetchMovies();
  },
};
</script>
<style scoped>
.video-container{
    position: relative;
    margin-top: 2rem;
    width: 100%;
    height: 30rem;
}
.video-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.video-container h2 {   
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  text-align: center;
  color: white;
}
@media(max-width: 747px){
    .video-container h2{
        font-size: 2.2rem;
    }
}
</style>