
export async function fetchMovies() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2QyMDdkZjQzYjcyMGEyMzEyOGYzNGRjM2I0MGM1ZCIsInN1YiI6IjY0YWY4MTY2ZDY1OTBiMDBlNDBiNThmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qrTcA0lToP7TNai17IWVZK98o-XRsCOuWdZPqw6QHWM'
      }
    };
  
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?language=es', options);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  }
  