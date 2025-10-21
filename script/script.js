document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidad del Menú Hamburguesa para móviles ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Alterna la clase 'active' para mostrar/ocultar el menú
        navLinks.classList.toggle('active');
    });


    // --- Funcionalidad de "Añadir al Carrito" ---
    const cartButtons = document.querySelectorAll('.add-to-cart-btn');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Guarda el texto y contenido original del botón
            const originalContent = button.innerHTML;

            // Cambia el contenido y estilo del botón
            button.innerHTML = '<i class="fas fa-check"></i> ¡Añadido!';
            button.classList.add('added');

            // Después de 2 segundos, revierte el botón a su estado original
            setTimeout(() => {
                button.innerHTML = originalContent;
                button.classList.remove('added');
            }, 2000);
        });
    });

});