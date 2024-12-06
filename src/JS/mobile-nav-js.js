// Script para o menu móvel
const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active'); // Alterna a visibilidade do menu
});