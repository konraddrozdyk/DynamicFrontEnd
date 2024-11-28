const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('open'); // Toggle 'open' class to show/hide the menu
});
