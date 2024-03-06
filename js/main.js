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

$('#woman_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:3
        },
        768:{
            items:4
        },
        1000:{
            items:5
        }
    }
})