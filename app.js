// import { animate } from "./motion"

// Animate via selector

// import '../styles/style.scss'
const preview_text = document.getElementsByTagName('P');
const preview_head = document.querySelectorAll('h3');
const img_inner = document.querySelector('.preview_image_inner');
const preview = document.querySelector('.previews');
const frame = document.querySelector('.frame');
const logo = document.querySelector('.logo_aroww');
const hover = document.querySelector('.hov');
const hover2 = document.querySelector('.hov2');
const hover3 = document.querySelector('.hov3');
const image2 = document.querySelector('.item_image_inner2');
const clk = document.getElementById('click2')
const image = document.querySelector('.item_image_inner');
const image3 = document.querySelector('.item_image_inner3');
const overlay_top = document.querySelector('.overlay_screen');
const overlay_bottom = document.querySelector('.overlay_screen2');
const child = preview.children;
// let pris = hover2.parentElement.children[2];
// console.log(hover2.parentElement.children[2].children)
logo.addEventListener('click', () => {

    overlay_top.style.transform = ('translateY(-500px)');
    overlay_bottom.style.transform = ('translateY(500px)');
    preview.style.opacity = ('0');
    preview.style.pointerEvents = ('none');
    frame.style.color = ('#000')
    preview.style.transform = ('translateY(-100px)')
    img_inner.style.transform = ('translateY(270px)')
    preview_text.style.transform = ('translateY(30)')
    preview_head.style.transform = ('translateY(30)')
})
clk.addEventListener('click', () => {
    // animate('overlay_top', { y: ['0', '500px'] }, { duration: 0.2, easing: 'ease-out' })
    console.log("bbbbb");
    overlay_top.style.transform = ('translateY(500px)');
    overlay_bottom.style.transform = ('translateY(-500px)');
    preview.style.transitionDelay = ('1s')
    preview.style.opacity = ('1');
    preview.style.pointerEvents = ('auto');
    frame.style.color = ('#a17445')
    preview.style.transitionDelay = ('1s');
    preview.style.transform = ('translateY(100px)')
    img_inner.style.transform = ('translateY(0px)')
    preview_text.style.transform = ('translateY(0)')
    preview_head.style.transform = ('translateY(0)')







})

hover2.addEventListener('mouseover', () => {

    image2.style.transform = 'scale(1.2)'
    image2.style.transition = '1s ease'


})
hover2.addEventListener('mouseout', () => {
    image2.style.transform = 'scale(1)'
    image2.style.transition = '0.5s ease'
})
hover3.addEventListener('mouseover', () => {

    image3.style.transform = 'scale(1.2)'
    image3.style.transition = '1s ease'


})
hover3.addEventListener('mouseout', () => {
    image3.style.transform = 'scale(1)'
    image3.style.transition = '0.5s ease'
})
hover.addEventListener('mouseover', () => {

    image.style.transform = 'scale(1.2)'
    image.style.transition = '1s ease'


})
hover.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)'
    image.style.transition = '0.5s ease'
})