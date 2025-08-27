// script.js - menu hamburguer para todas as páginas
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');       // seleciona o menu
  const toggleBtn = document.querySelector('#menu-toggle'); // botão hamburguer
  const links = document.querySelectorAll('.menu a'); // todos os links do menu

  // Abre/fecha o menu ao clicar no hamburguer
  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('open');  // adiciona/remove a classe "open"
  });

  // Fecha o menu ao clicar em qualquer link (apenas no mobile)
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        menu.classList.remove('open');
      }
    });
  });

  // Ajusta menu ao redimensionar a tela
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menu.classList.remove('open'); // força menu aberto no desktop
    }
  });
});
