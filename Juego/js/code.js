const greetingElement = document.getElementById("greeting");
const greeting2Element = document.getElementById("greeting2");
const questionElement = document.getElementById("question");

const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");

// Inicializamos los elementos con opacidad 0
greetingElement.style.opacity = "1";
greeting2Element.style.opacity = "0";
questionElement.style.opacity = "0";

// Mostramos un saludo al usuario
greetingElement.textContent = `Hola Juanita, te voy a hacer una serie de preguntas en 3,2,1...`;

// Mostramos el saludo 2 después de 4 segundos con una transición suave
setTimeout(() => {
    greetingElement.style.opacity = "0"; // Ocultamos el saludo inicial
    setTimeout(() => {
        greetingElement.style.visibility = "hidden"; // Lo ocultamos completamente
        greeting2Element.style.visibility = "visible"; // Mostramos el saludo 2
        greeting2Element.style.opacity = "1"; // Transición suave para mostrar
        greeting2Element.textContent = "Bueno, de hecho solo es una pregunta, y es...";
    }, 1000); // Tiempo para que la opacidad llegue a 0
}, 4000);

// Mostramos la pregunta al usuario después de 8 segundos con una transición suave
setTimeout(() => {
    greeting2Element.style.opacity = "0"; // Ocultamos el saludo 2
    setTimeout(() => {
        greeting2Element.style.visibility = "hidden"; // Lo ocultamos completamente
        questionElement.style.visibility = "visible"; // Mostramos la pregunta
        questionElement.style.opacity = "1"; // Transición suave para mostrar
    }, 1000); // Tiempo para que la opacidad llegue a 0
}, 8000);

// Mover el botón "No" a una posición aleatoria dentro de la tarjeta
noButton.addEventListener("mouseover", () => {
    const cardRect = document.querySelector('.card').getBoundingClientRect();
    const maxX = cardRect.width - noButton.offsetWidth;
    const maxY = cardRect.height - noButton.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Redirigir a otra página al hacer clic en "Sí"
yesButton.addEventListener("click", () => {
    window.location.href = "next.html"; // Redirige a la nueva página
});