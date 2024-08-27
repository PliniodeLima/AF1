// script.js

// Navegação suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const servicesButtons = document.querySelectorAll('.services-button');

    servicesButtons.forEach(button => {
        button.addEventListener('click', function() {
            const servicesItem = this.parentNode;
            const isActive = servicesItem.classList.contains('active');

            // Fecha todos os itens
            document.querySelectorAll('.services-item').forEach(item => {
                item.classList.remove('active');
            });

            // Se o item clicado não estava ativo, ativa ele
            if (!isActive) {
                servicesItem.classList.add('active');
            }
        });
    });
});

const slideContainer = document.querySelector('.clients-slide');
let isHovered = false;

slideContainer.addEventListener('mouseenter', () => {
    isHovered = true;
    slideContainer.style.animationPlayState = 'paused';
});

slideContainer.addEventListener('mouseleave', () => {
    isHovered = false;
    slideContainer.style.animationPlayState = 'running';
});

document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const faqItem = this.parentNode;
            const isActive = faqItem.classList.contains('active');

            // Fecha todos os itens
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Se o item clicado não estava ativo, ativa ele
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});