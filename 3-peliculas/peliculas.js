let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", () => {
  if (pagina < 1000) {
    pagina += 1;
    cargarPeliculas();
  }
});

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    cargarPeliculas();
  }
});

const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=664383499cd9c3e26dee3c4be3a2950b&language=es-ES&page=${pagina}`
    );

    console.log(respuesta);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();

      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `
        <div class="pelicula">
        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="${pelicula.title}">
        <h3 class="titulo">${pelicula.title}</h3></div>
        `;
      });

      document.getElementById("contenedor").innerHTML = peliculas;
    } else if (respuesta.status === 401) {
      console.log("La película no se encuentra disponible en la base de datos");
    } else if (respuesta.status === 404) {
      console.log("La película no se encuentra disponible en la base de datos");
    }
  } catch (error) {
    console.log(error);
  }
};
cargarPeliculas();
