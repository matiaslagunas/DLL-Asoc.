// index.js

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.contenedor-nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('show'); // Alternar la clase para mostrar/ocultar
    });
});
