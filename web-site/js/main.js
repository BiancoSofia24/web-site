$(document).ready(function (){
    $('.slide-1').bxSlider({
        modo: 'fade'
    })
    $('.slide-2').bxSlider({
        modo: 'fade'
    })
    $('.slide-3').bxSlider({
        modo: 'fade'
    })
})

document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});