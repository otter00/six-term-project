//      НЕ ЗАБЫТЬ РАСКОММЕНТИРОВАТЬ         

document.addEventListener('DOMContentLoaded', ()=> {
    //setTimeout(() => alert('Здравствуйте! Наши двери всегда для вас открыты - выходите!'), 1000);
});

let heroBlock = document.querySelector('.hero-block__container');
let excursionsBlock = document.querySelector('.excursions__container');
let attractionsBlock = document.querySelector('.attractions__container');
let galleryBlock = document.querySelector('.gallery__container');

// Скрываем-открываем блок в зависимости от пришедшего запроса
document.querySelector('.excursions').addEventListener('click', ()=>{
    heroBlock.classList.add("hidden");
    excursionsBlock.classList.remove("hidden");
    attractionsBlock.classList.add("hidden");
    galleryBlock.classList.add("hidden");
})

document.querySelector('.attr').addEventListener('click', ()=>{
    heroBlock.classList.add("hidden");
    excursionsBlock.classList.add("hidden");
    attractionsBlock.classList.remove("hidden");
    galleryBlock.classList.add("hidden");
})

document.querySelector('.fa').addEventListener('click', ()=>{
    heroBlock.classList.remove("hidden");
    excursionsBlock.classList.add("hidden");
    attractionsBlock.classList.add("hidden");
    galleryBlock.classList.add("hidden");
})

document.querySelector('.gallery').addEventListener('click', ()=>{
    heroBlock.classList.add("hidden");
    excursionsBlock.classList.add("hidden");
    attractionsBlock.classList.add("hidden");
    galleryBlock.classList.remove("hidden");
})
