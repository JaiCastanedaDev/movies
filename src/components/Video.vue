<template>
<div v-if="!showVideo && movies.length > 0" class="video-container">
  <img :src="`https://image.tmdb.org/t/p/original${movies[0].backdrop_path}`" alt="Botón de reproducción" @click="playVideo">
  <button class="play-button" @click="playVideo"><i class="fas fa-play"></i></button>
</div>

<div v-if="showVideo && video.length > 0" class="plyr__video-embed" id="player">
    <iframe 
      :src="`https://www.youtube.com/embed/${video[1].key}?origin=https://plyr.io&amp;modestbranding=1&amp;autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`"
      allowfullscreen
      allowtransparency
      allow="autoplay"
    ></iframe>
  </div>

</template>

<script>
import { fetchMovies } from './api.js';



export default {
  name: 'Video',
  data() {
    return {
      movies: [],
      video: [],
      showVideo: false,
    };
  },
  components: {   },
  async created() {
    this.movies = await fetchMovies();
    this.fetchVideos();
  },
  methods: {
    fetchVideos() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2QyMDdkZjQzYjcyMGEyMzEyOGYzNGRjM2I0MGM1ZCIsInN1YiI6IjY0YWY4MTY2ZDY1OTBiMDBlNDBiNThmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qrTcA0lToP7TNai17IWVZK98o-XRsCOuWdZPqw6QHWM'
    }
  };

  fetch(`https://api.themoviedb.org/3/movie/${this.movies[0].id}/videos?language=es`, options)
    .then(response => response.json())
    .then(data => {
      this.video = data.results;
      console.log(this.video);
    })
    .catch(err => console.error(err));
},
    playVideo() {
    this.showVideo = true;
  },
    
  }
};
</script>
<style scoped>
.plyr__video-embed{
  position: relative;
    margin-top: 2rem;
    width: 100%;
    height: 30rem;
}
.plyr__video-embed iframe{
  width: 100%;
    height: 100%;
    object-fit: cover;
}
.search{
  position: absolute;
  top:0;
  left: 5%;
}
.video-container{
    position: relative;
    margin-top: 2rem;
    width: 100%;
    height: 30rem;
}
.video-container:hover{
  cursor: pointer
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
.rotate {
  animation: rotateAnimation 1s forwards;
}

@keyframes rotateAnimation {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.play-button:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.play-button i {
  font-size: 48px;
  color: #000;
  transition: transform 0.3s;
}

.play-button:hover i {
  transform: scale(1.1);
}
</style>