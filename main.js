const morebtn = document.querySelector('.info .metadata .title .morebtn');
const title = document.querySelector('.info .metadata .title .text');

morebtn.addEventListener('click',() => {
    morebtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});