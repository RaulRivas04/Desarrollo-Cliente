document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("grocery-form");
    const input = document.getElementById("grocery-input");
    const list = document.getElementById("grocery-list");
    const clearButton = document.getElementById("clear-items");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const itemValue = input.value.trim();
      if (itemValue) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          ${itemValue}
          <button class="edit-btn">✏️</button>
          <button class="delete-btn">🗑️</button>
        `;
        list.appendChild(listItem);
        input.value = "";
      }
    });
  
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
      } else if (e.target.classList.contains("edit-btn")) {
        const listItem = e.target.parentElement;
        input.value = listItem.textContent.trim();
        listItem.remove();
      }
    });
  
    clearButton.addEventListener("click", () => {
      list.innerHTML = "";
    });
  });
  