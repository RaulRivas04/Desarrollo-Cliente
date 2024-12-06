// Base URL de la API
const BASE_URL = "https://api.escuelajs.co/api/v1";

// Contenedores del DOM
const container = document.getElementById("products");
const categorySelect = document.getElementById("categories");
const loadingIndicator = document.getElementById("loading");

// Variables para scroll infinito
let currentCategory = null;
let offset = 0;
const limit = 10;
let isLoading = false;

// Función genérica para hacer fetch
async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Cargar categorías en un <select>
async function loadCategories() {
  const categories = await fetchData(`/categories`);
  categorySelect.innerHTML = `<option value="">Todas las categorías</option>`;
  categories.forEach((category) => {
    const option = `<option value="${category.id}">${category.name}</option>`;
    categorySelect.innerHTML += option;
  });
}

// Mostrar productos
async function getProducts(categoryId = null, append = false) {
  if (isLoading) return; // Evitar múltiples llamadas simultáneas
  isLoading = true;
  loadingIndicator.style.display = "block";

  const endpoint = categoryId
    ? `/categories/${categoryId}/products?limit=${limit}&offset=${offset}`
    : `/products?limit=${limit}&offset=${offset}`;
  const products = await fetchData(endpoint);

  if (!append) container.innerHTML = ""; // Limpiar contenedor si no es append

  products.forEach((product) => {
    // Validar que el producto tiene imágenes
    const image = product.images && product.images[0] ? product.images[0] : "https://via.placeholder.com/300";
    const productCard = `
      <div class="product" data-id="${product.id}">
        <img src="${image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>Precio: $${product.price}</p>
      </div>
    `;
    container.innerHTML += productCard;
  });

  offset += limit; // Actualizar el offset
  isLoading = false;
  loadingIndicator.style.display = "none";
}

// Mostrar detalles de un producto
async function showProductDetails(productId) {
  const product = await fetchData(`/products/${productId}`);
  container.innerHTML = `
    <div class="product-details">
      <button id="backButton">Volver</button>
      <img src="${product.images[0]}" alt="${product.title}">
      <h1>${product.title}</h1>
      <p>${product.description}</p>
      <p>Precio: $${product.price}</p>
    </div>
  `;

  // Volver a la vista anterior
  document.getElementById("backButton").addEventListener("click", () => {
    offset = 0; // Reiniciar offset
    getProducts(currentCategory);
  });
}

// Scroll infinito
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
    !isLoading
  ) {
    getProducts(currentCategory, true);
  }
});

// Escuchar cambios en la selección de categorías
categorySelect.addEventListener("change", (e) => {
  currentCategory = e.target.value || null;
  offset = 0; // Reiniciar offset
  getProducts(currentCategory);
});

// Detectar clic en un producto para mostrar detalles
container.addEventListener("click", (e) => {
  const productCard = e.target.closest(".product");
  if (productCard) {
    const productId = productCard.getAttribute("data-id");
    showProductDetails(productId);
  }
});

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", async () => {
  await loadCategories();
  getProducts();
});
