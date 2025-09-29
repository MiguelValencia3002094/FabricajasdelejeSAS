document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.navbar-toggler');
    const navbarContent = document.querySelector('.navbar-content');

    toggler.addEventListener('click', function() {
        navbarContent.classList.toggle('open');
    });
});

// Obtiene el botón por su clase
const toTopButton = document.querySelector('.back-to-top');

// Muestra u oculta el botón basado en el scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Muestra el botón después de 200px de scroll
        toTopButton.classList.add('show');
    } else {
        toTopButton.classList.remove('show');
    }
});

// Hace scroll suave hacia arriba al hacer clic
toTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});