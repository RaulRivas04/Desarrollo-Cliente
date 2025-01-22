document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const lista = document.getElementById("lista");
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modalBody");
    const closeModal = document.getElementById("closeModal");
    const landingPage = document.getElementById("landingPage");
    const searchSection = document.getElementById("searchSection");
    const startSearch = document.getElementById("startSearch");
    const searchInput = document.getElementById("searchInput");
    const filterType = document.getElementById("filterType");
    const reportSection = document.getElementById("reportSection");
    const createReportButton = document.getElementById("createReportButton");

    let queryGlobal = "";
    let paginaActual = 1;
    let allData = [];

    // Navegar desde la landing a la búsqueda
    startSearch.addEventListener("click", () => {
        landingPage.style.display = "none";
        searchSection.style.display = "block";
    });

    // Buscar automáticamente al escribir (mínimo 3 caracteres)
    searchInput.addEventListener("input", async () => {
        queryGlobal = searchInput.value.trim();
        if (queryGlobal.length < 3) return;

        // Resetear la paginación y la lista
        paginaActual = 1;
        allData = [];
        loader.style.display = "block";
        const filter = filterType.value;
        const peliculas = await fetchPeliculas(queryGlobal, paginaActual, filter);
        loader.style.display = "none";
        renderPeliculas(peliculas, true);

        // Botón para crear el informe después de la búsqueda
        createReportButton.style.display = "block";
    });

    // Cambiar el filtro sin perder la búsqueda actual
    filterType.addEventListener("change", async () => {
        const filter = filterType.value;
        if (queryGlobal.length >= 3) {
            paginaActual = 1;
            allData = [];

            // Mostrar el loader al cambiar el filtro
            loader.style.display = "block";
            const peliculas = await fetchPeliculas(queryGlobal, paginaActual, filter);

            // Ocultar el loader cuando termine de cargar
            loader.style.display = "none";
            renderPeliculas(peliculas, true);
        }
    });

    // Scroll infinito
    window.addEventListener("scroll", async () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && queryGlobal) {
            paginaActual++;
            loader.style.display = "block";
            const filter = filterType.value;
            const peliculas = await fetchPeliculas(queryGlobal, paginaActual, filter);
            loader.style.display = "none";
            renderPeliculas(peliculas, false);
        }
    });

    // Cerrar modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer click afuera de el
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Fetch películas, series o videojuegos
    async function fetchPeliculas(query, page, type) {
        try {
            const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&type=${type !== "all" ? type : ""}&apikey=5edefc4c&page=${page}`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                const enhancedData = data.Search.map((movie) => ({
                    ...movie,
                    //Votos
                    Votes: Math.floor(Math.random() * 50000),
                    //Rating IMDb
                    imdbRating: Math.random() * 10,
                    //Recaudación
                    BoxOffice: Math.floor(Math.random() * 200) + "M"
                }));
                allData = [...allData, ...enhancedData];
                return enhancedData;
            } else {
                return [];
            }
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            return [];
        }
    }

    // Renderizar películas/series/videojuegos
    function renderPeliculas(peliculas, limpiar) {
        if (limpiar) lista.innerHTML = "";

        peliculas.forEach((pelicula) => {
            const li = document.createElement("li");
            li.className = "pelicula-item";

            const img = document.createElement("img");
            img.src = pelicula.Poster !== "N/A" ? pelicula.Poster : "placeholder.png";
            img.alt = pelicula.Title;
            img.onerror = () => img.src = "https://via.placeholder.com/300x450?text=Imagen+No+Disponible";
            li.appendChild(img);

            const title = document.createElement("h3");
            title.textContent = `${pelicula.Title} (${pelicula.Year})`;
            li.appendChild(title);

            li.addEventListener("click", () => mostrarDetalles(pelicula.imdbID));
            lista.appendChild(li);
        });
    }

    // Mostrar detalles
    async function mostrarDetalles(imdbID) {
        try {
            const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=5edefc4c`);
            const data = await res.json();
            if (data.Response === "True") {
                modalBody.innerHTML = `
                    <h2>${data.Title} (${data.Year})</h2>
                    <div id="modalImageContainer">
                        <img id="modalImage" src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/300x450?text=Imagen+No+Disponible"}" alt="${data.Title}">
                    </div>
                    <p><strong>Director:</strong> ${data.Director || "No disponible"}</p>
                    <p><strong>Actores:</strong> ${data.Actors || "No disponible"}</p>
                    <p><strong>Género:</strong> ${data.Genre || "No disponible"}</p>
                    <p><strong>Duración:</strong> ${data.Runtime || "No disponible"}</p>
                    <p><strong>Descripción:</strong> ${data.Plot || "No disponible"}</p>
                    <p><strong>Valoraciones:</strong></p>
                    <ul>${data.Ratings.map(r => `<li>${r.Source}: ${r.Value}</li>`).join("")}</ul>
                `;
                modal.style.display = "flex";
            }
        } catch (error) {
            console.error("Error al obtener detalles:", error);
        }
    }

    // Función para manejar la creación de informes
    createReportButton.addEventListener("click", async () => {
        if (allData.length === 0) {
            alert("No hay datos disponibles para generar el informe.");
            return;
        }

        // Obtener el tipo de filtro seleccionado
        const filtroSeleccionado = document.getElementById("filterType").value;

        let filteredData = [];

        if (filtroSeleccionado === "all") {
            // Combinar las películas, series y videojuegos
            const peliculas = await fetchPeliculas(queryGlobal, 1, "movie");
            const series = await fetchPeliculas(queryGlobal, 1, "series");
            const videojuegos = await fetchPeliculas(queryGlobal, 1, "game");

            filteredData = [...peliculas, ...series, ...videojuegos];
        } else {
            // Filtrar según el tipo seleccionado
            filteredData = allData.filter(item => item.Type === filtroSeleccionado);
        }

        // Filtrar las 5 mejores según diferentes criterios
        const topImdb = filteredData.sort((a, b) => b.imdbRating - a.imdbRating).slice(0, 5);
        const topVotes = filteredData.sort((a, b) => b.Votes - a.Votes).slice(0, 5);
        const topBoxOffice = filteredData.sort((a, b) => parseInt(b.BoxOffice.replace(/[^\d]/g, "")) - parseInt(a.BoxOffice.replace(/[^\d]/g, ""))).slice(0, 5);

        // Definir el título del informe según el filtro seleccionado
        let informeTitulo = "Informe de Todo";
        if (filtroSeleccionado === "series") {
            informeTitulo = "Informe de Series";
        } else if (filtroSeleccionado === "game") {
            informeTitulo = "Informe de Videojuegos"; 
        } else if (filtroSeleccionado === "movie") {
            informeTitulo = "Informe de Películas";
        }

        // Generar el informe en HTML
        const informeHTML = `
            <h2>${informeTitulo}</h2>
            <h3>Elementos con mejor puntuación en IMDb:</h3>
            <ul>
                ${topImdb.map(item => `<li>${item.Title} - Puntuación IMDb: ${item.imdbRating}</li>`).join("")}
            </ul>
            <h3>Elementos con mayor recaudación:</h3>
            <ul>
                ${topBoxOffice.map(item => `<li>${item.Title} - Recaudación: ${item.BoxOffice}</li>`).join("")}
            </ul>
            <h3>Elementos más votados:</h3>
            <ul>
                ${topVotes.map(item => `<li>${item.Title} - Votos: ${item.Votes}</li>`).join("")}
            </ul>
            <canvas id="imdbChart" style="margin-top: 20px;"></canvas>
            <canvas id="boxOfficeChart" style="margin-top: 20px;"></canvas>
            <canvas id="votesChart" style="margin-top: 20px;"></canvas>
        `;

        // Mostrar el informe en el modal
        modalBody.innerHTML = informeHTML;
        modal.style.display = "flex";

        // Creacion de gráficas
        crearGrafico(topImdb, 'imdbChart', 'Puntuación IMDb');
        crearGrafico(topBoxOffice, 'boxOfficeChart', 'Recaudación');
        crearGrafico(topVotes, 'votesChart', 'Votos');
    });

    // Función para crear gráficos de barras
    function crearGrafico(data, canvasId, label) {
        const ctx = document.getElementById(canvasId).getContext("2d");
        const chartData = {
            labels: data.map(item => item.Title),
            datasets: [{
                label: label,
                data: data.map(item => item.imdbRating || item.BoxOffice.replace(/[^\d]/g, "") || item.Votes),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        };
        new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
