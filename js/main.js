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
    nav:false,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:3
        },
        450:{
            items:4
        },
        768:{
            items:5,
        },
        992:{
            items:5,
            nav:true,
        }
    }
})
$('#man_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:3
        },
        450:{
            items:4
        },
        768:{
            items:5,
        },
        992:{
            items:5,
            loop:false,
        }
    }
})
$('#kid_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:false,
    responsive:{
        0:{
            items:3
        },
        450:{
            items:4
        },
        768:{
            items:4,
        },
        992:{
            items:4,
            loop:false,
        }
    }
})