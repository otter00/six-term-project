document.addEventListener('DOMContentLoaded', ()=> {
    setTimeout(() => alert('Здравствуйте! Наши двери всегда для вас открыты - выходите!'), 1000);
});

let heroBlock = document.querySelector('.hero-block__container');

document.querySelector('.excursions').addEventListener('click', ()=>{
    heroBlock.classList.toggle("hidden");
})