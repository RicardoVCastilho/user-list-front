// Função do menu responsivo
function showMenu() {
    const hamburgerMenu = document.querySelector('.hamburguer-menu');
    const icon = document.querySelector('.icon');

    // Alterna a classe 'open' e altera o ícone correspondente
    const isOpen = hamburgerMenu.classList.toggle('open');
    icon.src = isOpen 
        ? "./src/images/close_white_36dp.svg" 
        : "./src/images/menu_white_36dp.svg";
}
