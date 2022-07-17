const cargarPeliculas = async () => {
  const respuesta = await fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=664383499cd9c3e26dee3c4be3a2950b&language=es-ES"
  );
  console.log(respuesta);
};
cargarPeliculas();
