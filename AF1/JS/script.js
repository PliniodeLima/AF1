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
    // Accordion Functionality
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const serviceImage = document.getElementById('service-image-img');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = content.style.display === 'block';
            
            // Close all open items
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.display = 'none';
            });
            
            // Update image if not active
            if (!isActive) {
                content.style.display = 'block';
                const imgSrc = this.parentElement.getAttribute('data-image');
                serviceImage.src = imgSrc;
            } else {
                serviceImage.src = ''; // Clear image if closing
            }
        });
    });
});

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const imageSrc = accordionItem.getAttribute('data-image');
        const serviceImage = document.getElementById('service-image-img');
        
        document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
        accordionItem.classList.add('active');

        serviceImage.classList.remove('active');
        
        setTimeout(() => {
            serviceImage.src = imageSrc;
            serviceImage.classList.add('active');
        }, 300); // Delay para a transição de opacidade
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
