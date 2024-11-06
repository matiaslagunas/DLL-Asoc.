document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.contenedor-nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show'); // Alternar la clase para mostrar/ocultar
        });
    }
});
