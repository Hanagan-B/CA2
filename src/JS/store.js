window.addEventListener('scroll', function() {
  var buyNowButton = document.getElementById('buy-now');
  
  if (window.scrollY > 100) {
      buyNowButton.style.display = 'block';  
  } else {
      buyNowButton.style.display = 'none'; 
  }
});