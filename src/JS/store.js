// Função para exibir o botão "Compre agora" ao rolar a página
window.addEventListener('scroll', function() {
    var buyNowButton = document.getElementById('buy-now');
    
    // Verifica se a rolagem passou de 100px
    if (window.scrollY > 100) {
      buyNowButton.style.display = 'block';  // Exibe o botão
    } else {
      buyNowButton.style.display = 'none';  // Esconde o botão
    }
});