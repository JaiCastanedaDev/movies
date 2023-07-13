<template>
    <div class="movies-container">
        <div class="movie-item" v-for="item in movies" :key="item.id">
                <li>
                    <a href="">
                        <img class="img-container" :src="`https://image.tmdb.org/t/p/w500${item.poster_path }`" alt="">
                    </a>
                    <div class="title">{{ item.title }}</div>
                </li>
        </div>
    </div>
</template>

<script> 
import { fetchMovies } from './api';
export default {
    data() {
        return {
            movies: [],
        }
    },
    async created() {
    this.movies = await fetchMovies();
  },
};
</script>
<style scoped>
.movies-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem;
}
.movies-container ul, 
.movies-container li{
    list-style-type: none;
}

.movie-item {
    width: 20%;
    height: 25rem;
    margin: 1rem;
    
}
.img-container{
     width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-container img{
  max-width: 100%;
  max-height: 100%;
}
@media  (max-width: 747px) {
    .movie-item{
        width: 45%;
        margin: .5rem;
        height: 18rem;
    }
}
</style>
