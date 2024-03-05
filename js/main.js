const menuButton = document.getElementById('menuButton');
const menuContainer = document.getElementById('menuContainer');
const backButton = document.querySelector('.back-button');

menuButton.addEventListener('click', () => {
    menuContainer.style.display = 'flex';
    setTimeout(() => {
        menuContainer.style.transform = 'translateY(-87vh)';
    }, 100);
});

backButton.addEventListener('click', () => {
    menuContainer.style.transform = 'translateY(100vh)';
    setTimeout(() => {
        menuContainer.style.display = 'none';
    }, 300);
});