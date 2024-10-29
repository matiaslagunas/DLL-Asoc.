let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Calcula el índice de la siguiente imagen
    const offset = -currentIndex * 100; // Calcula el desplazamiento
    document.querySelector('.carousel').style.transform = `translateX(${offset}vw)`; // Aplica el desplazamiento
}

setInterval(showNextImage, 7000); // Cambia la imagen cada 3 segundos
