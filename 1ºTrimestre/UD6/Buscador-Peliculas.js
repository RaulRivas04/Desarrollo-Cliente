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
    const reportContent = document.getElementById("reportContent");
    const reportChart = document.getElementById("reportChart");

    let queryGlobal = "";
    let paginaActual = 1;
    let peliculasActuales = [];
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

        paginaActual = 1;
        loader.style.display = "block";
        const filter = filterType.value;
        const peliculas = await fetchPeliculas(queryGlobal, paginaActual, filter);
        loader.style.display = "none";
        renderPeliculas(peliculas, true);
    });

    // Scroll infinito para cargar más resultados
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

    // Fetch películas o series
    async function fetchPeliculas(query, page, type) {
        try {
            const url = `http://www.omdbapi.com/?s=${encodeURIComponent(query)}&type=${type !== "all" ? type : ""}&apikey=5edefc4c&page=${page}`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === "True") {
                const enhancedData = data.Search.map((movie) => ({
                    ...movie,
                    Votes: Math.floor(Math.random() * 50000), // Simula votos
                    BoxOffice: Math.floor(Math.random() * 200) + "M", // Simula recaudación
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

    // Renderizar películas/series
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
            const res = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=5edefc4c`);
            const data = await res.json();
            if (data.Response === "True") {
                modalBody.innerHTML = `
                    <h2>${data.Title} (${data.Year})</h2>
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
            console.error("Error al mostrar detalles:", error);
        }
    }

    // Crear informe
    async function crearInforme() {
        reportSection.style.display = "block";

        const topImdb = allData
            .sort((a, b) => parseFloat(b.imdbRating || 0) - parseFloat(a.imdbRating || 0))
            .slice(0, 5);
        const topVotes = allData.sort((a, b) => b.Votes - a.Votes).slice(0, 5);
        const topBoxOffice = allData.sort((a, b) => parseFloat(b.BoxOffice) - parseFloat(a.BoxOffice)).slice(0, 5);

        reportContent.innerHTML = `
            <h3>Películas más valoradas (IMDb)</h3>
            <ul>${topImdb.map((p) => `<li>${p.Title} (${p.imdbRating})</li>`).join("")}</ul>
            <h3>Películas más votadas</h3>
            <ul>${topVotes.map((p) => `<li>${p.Title} (${p.Votes} votos)</li>`).join("")}</ul>
            <h3>Películas con mayor recaudación</h3>
            <ul>${topBoxOffice.map((p) => `<li>${p.Title} (${p.BoxOffice})</li>`).join("")}</ul>
        `;

        const ctx = reportChart.getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: topImdb.map((p) => p.Title),
                datasets: [
                    {
                        label: "IMDb Rating",
                        data: topImdb.map((p) => parseFloat(p.imdbRating || 0)),
                        backgroundColor: "rgba(0, 123, 255, 0.7)",
                    },
                ],
            },
        });
    }
});
