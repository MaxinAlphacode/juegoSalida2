const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

// Establecer posiciones iniciales para los botones
yesButton.style.position = "absolute";
noButton.style.position = "absolute";
yesButton.style.left = "20%";
yesButton.style.top = "60%";
noButton.style.left = "68%";
noButton.style.top = "60%";

// Variable para rastrear si se ha interactuado con el botón "No"
let interactedWithNo = false;

// Cambiar el botón "No" por "Sí" al hacer clic y alternar posiciones y colores
noButton.addEventListener("click", () => {
    // Marcar que se ha interactuado con el botón "No"
    interactedWithNo = true;

    // Intercambiar colores
    const tempColor = noButton.style.backgroundColor;
    noButton.style.backgroundColor = yesButton.style.backgroundColor;
    yesButton.style.backgroundColor = tempColor;

    // Intercambiar posiciones
    const tempLeft = noButton.style.left;
    const tempTop = noButton.style.top;
    noButton.style.left = yesButton.style.left;
    noButton.style.top = yesButton.style.top;
    yesButton.style.left = tempLeft;
    yesButton.style.top = tempTop;
});

// Redirigir al otro index al hacer clic en el botón "Sí"
yesButton.addEventListener("click", () => {
    // Solo redirigir si se ha interactuado con el botón "No" al menos una vez
    if (interactedWithNo) {
        window.location.href = "next2.html"; // Redirige a la nueva página
    }
});