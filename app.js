// import { animate } from "./motion"

// Animate via selector

// import '../styles/style.scss'
const preview_2021 = document.querySelector('.preview_2021');
const preview_2020 = document.querySelector('.preview_2020');
const preview_2022 = document.querySelector('.preview_2022');
const img_inner = document.querySelector('.preview_image_inner');
const preview = document.querySelector('.previews');
const frame = document.getElementById('frame')
const frame_style = document.querySelector('.frame_styles');
const logo = document.querySelector('.logo_aroww');
const logo_bennet = document.getElementById('logo_aroww_bennet');
const logo_hughes = document.getElementById('logo_aroww_hughes');
const hover = document.querySelector('.hov');
const hover2 = document.querySelector('.hov2');
const hover3 = document.querySelector('.hov3');
const image2 = document.querySelector('.item_image_inner2');
const clk = document.getElementById('click2')
const clk3 = document.getElementById('click3')
const clk4 = document.getElementById('click4')
const image = document.querySelector('.item_image_inner');
const image3 = document.querySelector('.item_image_inner3');
const overlay_top = document.querySelector('.overlay_screen');
const overlay_bottom = document.querySelector('.overlay_screen2');
const child = preview.children;
// let pris = hover2.parentElement.children[2];
// console.log(hover2.parentElement.children[2].children)
let preview_open = (element) => {
    element.style.opacity = ('1')

    element.style.pointerEvents = ('auto')
    overlay_top.style.transform = ('translateY(500px)');
    overlay_bottom.style.transform = ('translateY(-500px)');
    preview.style.transitionDelay = ('1.5s')
    preview.style.opacity = ('1');
    preview.style.pointerEvents = ('auto');
    frame.style.color = ('#a17445')

    element.style.transform = ('translateY(100px)')
    img_inner.style.transform = ('translateY(0px)')
}
let preview_close = (element) => {
    element.style.opacity = ('0')
    element.style.pointerEvents = ('none')
    overlay_top.style.transform = ('translateY(-500px)');
    overlay_bottom.style.transform = ('translateY(500px)');
    overlay_top.style.transitionDelay = ('1s')
    overlay_bottom.style.transitionDelay = ('1s')
    preview.style.opacity = ('0');
    preview.style.pointerEvents = ('none');
    frame.style.color = ('#000')
    preview.style.transform = ('translateY(-100px)')
    img_inner.style.transform = ('translateY(270px)')
    preview.style.transitionDelay = ('0s')

}
logo.addEventListener('click', () => {

    preview_close(preview_2020)


})
clk.addEventListener('click', () => {

    preview_open(preview_2020)
})
clk3.addEventListener('click', () => {

    preview_open(preview_2021)
})
logo_bennet.addEventListener('click', () => {

    preview_close(preview_2021)
})
clk4.addEventListener('click', () => {
    preview_open(preview_2022)
})
logo_hughes.addEventListener('click', () => {
    preview_close(preview_2022)
})


hover2.addEventListener('mouseover', () => {

    scalein(image2)


})
hover2.addEventListener('mouseout', () => {
    scaleout(image2)
})
hover3.addEventListener('mouseover', () => {

    scalein(image3)


})
hover3.addEventListener('mouseout', () => {
    scaleout(image3)
})
hover.addEventListener('mouseover', () => {

    scalein(image)

})
hover.addEventListener('mouseout', () => {
    scaleout(image)
})
let scalein = (element) => {
    element.style.transform = 'scale(1.2)'
    element.style.transition = '1s ease'
}
let scaleout = (element) => {
    element.style.transform = 'scale(1)'
    element.style.transition = '0.5s ease'
}