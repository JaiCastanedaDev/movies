<template>
    <div>
      <nav class="navbar">
        <div class="navbar-start">
          <ul>
            <i class="fa-solid fa-video"></i>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Peliculas</a></li>
            <li><a href="#">Generos</a></li>
            <li><a href="#">Series</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </template>
  
  <script>


  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  .fa-solid{
    margin-right: 1rem;
    color: white;;
  }
  .navbar {
    width: 97.9%;
    background-color: #851d1d;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar a{
    text-decoration: none;
    color: white;
  }
  
  .navbar-start ul,
  .navbar-end ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .navbar-start li,
  .navbar-end li {
    margin-right: 1rem;
  }
  
  .navbar-start li:last-child,
  .navbar-end li:last-child {
    margin-right: 0;
  }
  
  .navbar-end {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
  </style>
  