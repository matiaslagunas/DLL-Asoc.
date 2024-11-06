
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.contenedor-nav-links');
    const body = document.querySelector('body');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Alternar la clase 'active' para mostrar/ocultar
        body.classList.toggle('menu-open'); // Alternar la clase 'menu-open' para ajustar el body
    });
});
