const buttonsContainer = document.getElementById("buttons-container");

// Crear 10 botones "No" y 1 botón "Sí"
for (let i = 0; i < 20; i++) {
    const noButton = document.createElement("button");
    noButton.textContent = "No";
    noButton.classList.add("next2-no-button"); // Clase única para los botones "No"
    noButton.style.position = "absolute";
    noButton.style.left = `${Math.random() * 80 + 10}%`; // Posición aleatoria horizontal
    noButton.style.top = `${Math.random() * 70 + 20}%`; // Posición aleatoria vertical
    noButton.addEventListener("click", () => {
        noButton.style.display = "none"; // Ocultar el botón al hacer clic
    });
    buttonsContainer.appendChild(noButton);
}

// Crear el botón "Sí"
const yesButton = document.createElement("button");
yesButton.textContent = "Sí";
yesButton.classList.add("next2-yes-button"); // Clase única para el botón "Sí"
yesButton.style.position = "absolute";
yesButton.style.left = "50%"; // Posición fija para el botón "Sí"
yesButton.style.top = "50%"; // Posición fija para el botón "Sí"
yesButton.style.transform = "translate(-50%, -50%)"; // Centrar el botón
yesButton.style.width = "250px"; // Ancho más grande
yesButton.style.height = "140px"; // Altura más grande
yesButton.style.fontSize = "60px"; // Texto más grande
yesButton.style.fontWeight = "bold"; // Texto en negrita
yesButton.style.padding = "30px";
 // Espaciado interno más grande
yesButton.addEventListener("click", () => {
    window.location.href = "final.html"; // Redirige a la última página
});
buttonsContainer.appendChild(yesButton);