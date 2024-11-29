window.onload = () => {
    document.getElementById("btn").addEventListener("click", function () {
        peticionAJAX(1);
    });
    document.getElementById("btnMas").addEventListener("click", function () {
        buscarMas();
    });
};

// Variable global para controlar la búsqueda paginada
let queryGlobal = "";
let paginaActual = 1;

// Función para hacer la petición AJAX
function peticionAJAX(pagina) {
    let query = document.getElementById("searchInput").value.trim();

    if (queryGlobal !== query) {
        queryGlobal = query;
        paginaActual = 1;
    }

    if (query === "") {
        alert("Por favor ingresa un término de búsqueda");
        return;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                try {
                    let respuesta = JSON.parse(this.responseText);

                    if (respuesta.Response === "True") {
                        if (pagina === 1) {
                            mostrarPeliculas(respuesta.Search, true);
                        } else {
                            mostrarPeliculas(respuesta.Search, false);
                        }
                    } else {
                        alert("No se encontraron películas o series con ese nombre.");
                    }
                } catch (error) {
                    console.error("Error al procesar la respuesta:", error);
                    alert("Hubo un error al procesar la respuesta del servidor.");
                }
            } else {
                alert("Error al realizar la solicitud: " + this.status);
            }
        }
    };

    let apiKey = "5edefc4c";
    let url = "http://www.omdbapi.com/?s=" + encodeURIComponent(queryGlobal) + "&apikey=" + apiKey + "&page=" + pagina;
    xhttp.open("GET", url, true);
    xhttp.send();
}

// Función para buscar más resultados
function buscarMas() {
    paginaActual += 1;
    peticionAJAX(paginaActual);
}

// Función para mostrar las películas o series en la lista
function mostrarPeliculas(peliculas, limpiarLista) {
    let miLista = document.getElementById("lista");

    if (limpiarLista) {
        miLista.innerHTML = "";
    }

    for (let pelicula of peliculas) {
        let li = document.createElement("li");
        li.classList.add("pelicula-item");

        // Imagen del póster
        let img = document.createElement("img");
        img.src = pelicula.Poster !== "N/A" ? pelicula.Poster : "placeholder.png";
        img.alt = pelicula.Title;
        img.style.width = "150px";

        // Título de la película
        let titulo = document.createElement("h3");
        titulo.innerHTML = pelicula.Title + " (" + pelicula.Year + ")";

        // Contenedor para los detalles
        let detalles = document.createElement("div");
        detalles.classList.add("pelicula-detalles");
        detalles.style.display = "none";

        // Tipo (película o serie) y Año
        let tipoGenero = document.createElement("p");
        tipoGenero.innerHTML = "Tipo: " + (pelicula.Type === "movie" ? "Película" : "Serie") + " | Año: " + pelicula.Year;
        detalles.appendChild(tipoGenero);

        // Al hacer clic en la imagen o el título, cargamos los detalles completos
        function obtenerDetalles() {
            obtenerDetallesPelicula(pelicula.imdbID, detalles);
        }

        img.addEventListener("click", obtenerDetalles);
        titulo.addEventListener("click", obtenerDetalles);

        li.appendChild(img);
        li.appendChild(titulo);
        li.appendChild(detalles);

        miLista.appendChild(li);
    }
}

// Función para obtener detalles completos de una película o serie
function obtenerDetallesPelicula(imdbID, detallesContenedor) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            try {
                let respuesta = JSON.parse(this.responseText);

                if (respuesta.Response === "True") {
                    // Mostrar género con capacidad de alternar
                    let genero = document.createElement("p");
                    genero.innerHTML = "Género: " + (respuesta.Genre ? respuesta.Genre : "No disponible");
                    genero.style.cursor = "pointer";
                    genero.addEventListener("click", function () {
                        // Alternar visibilidad del género
                        if (genero.style.display === "none") {
                            genero.style.display = "block";
                        } else {
                            genero.style.display = "none";
                        }
                    });
                    detallesContenedor.appendChild(genero);

                    // Mostrar descripción en lugar de sinopsis
                    let descripcion = document.createElement("p");
                    descripcion.innerHTML = (respuesta.Plot && respuesta.Plot !== "N/A") ? respuesta.Plot : "Descripción no disponible.";
                    detallesContenedor.appendChild(descripcion);

                    // Mostrar más detalles si se desea (p. ej. duración, director, etc.)
                    let duracion = document.createElement("p");
                    duracion.innerHTML = "Duración: " + (respuesta.Runtime ? respuesta.Runtime : "No disponible");
                    detallesContenedor.appendChild(duracion);

                    detallesContenedor.style.display = "block";
                } else {
                    alert("No se encontraron detalles para esta película o serie.");
                }
            } catch (error) {
                console.error("Error al procesar la respuesta de los detalles:", error);
                alert("Hubo un error al procesar los detalles de la película o serie.");
            }
        }
    };

    let apiKey = "5edefc4c";
    let url = "http://www.omdbapi.com/?i=" + imdbID + "&apikey=" + apiKey;
    xhttp.open("GET", url, true);
    xhttp.send();
}
