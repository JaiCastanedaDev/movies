<template>
    <div>
        <div class="field has-addons columns is-centered">
    <div class="control">
      <input class="input" type="text" placeholder="Buscar" v-model="searchText">
    </div>
    </div>
        <div class="movies-container">
            <div class="movie-item" v-for="item in filtered" :key="item.id" @click="selectMovie(item)">
                
                    <a href="#">
                        <img class="img-container" :src="`https://image.tmdb.org/t/p/w300${item.poster_path}`"
                            alt="movie-banner">
                    </a>
                    <div class="title-custom">{{ item.title }}</div>
            
            </div>
        </div>

        <div v-if="selectedMovie" class="fullscreen-video">
            <div class="close-button" @click="selectedMovie = null"><i class="fas fa-times"></i></div>
            <iframe v-if="videos.length > 0"
                :src="`https://www.youtube.com/embed/${videos[0].key}?origin=https://plyr.io&amp;modestbranding=1&amp;autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
                allowfullscreen allowtransparency allow="autoplay"></iframe>
        </div>
    </div>
</template>

<script>
import { fetchMovies } from './api';
export default {
    data() {
        return {
            searchText: "",
            movies: [],
            selectedMovie: null,
            videos: [],
        }
    },
    async created() {
        this.movies = await fetchMovies();
    },
    computed: {
        filtered() {
            
            return this.movies.filter(movie => {
                return movie.title.toLowerCase().includes(this.searchText.toLocaleLowerCase())
            })
        },
    },
    methods: {
        selectMovie(item) {
            this.selectedMovie = item;
            this.fetchVideos(item.id);
        },
        fetchVideos(movieId) {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2QyMDdkZjQzYjcyMGEyMzEyOGYzNGRjM2I0MGM1ZCIsInN1YiI6IjY0YWY4MTY2ZDY1OTBiMDBlNDBiNThmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qrTcA0lToP7TNai17IWVZK98o-XRsCOuWdZPqw6QHWM'
                }
            };

            fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=es-la`, options)
                .then(response => response.json())
                .then(data => {
                    this.videos = data.results;
                    console.log(this.videos);
                })
                .catch(err => console.error(err));
        },
    },
    watch: {
        searchText(newText) {
            console.log(newText);
        },
    },
};
</script>
<style scoped>
.control{
    width: 85%;
}
.input{
    bottom: 100%;
    -webkit-box-shadow: 2px 10px 37px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 10px 37px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 10px 37px 0px rgba(0,0,0,0.75)
}
.fullscreen-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    z-index: 999;
}
.fullscreen-video iframe{
    width: 90%;
    height: 90%;
}

.movies-container {
    display: grid;
    grid-template-columns: 
    repeat(auto-fit,
    minmax(15rem, 1fr));
    gap: 2rem;
    margin: 1rem;

}

.movies-container ul,
.movies-container li {
    list-style-type: none;
}

.movie-item {
    width: 100%;
    height: auto;
}

.title-custom {
    text-align: center;
    color: #fff;
    font-size: .8rem;
}
@media (max-width: 747px) {
    .movies-container{
        grid-template-columns: 
    repeat(auto-fit,
    minmax(8rem, 1fr));
    gap: 2rem;
    margin: 1rem;
    }
}
</style>
