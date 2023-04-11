//      НЕ ЗАБЫТЬ РАСКОММЕНТИРОВАТЬ         

document.addEventListener('DOMContentLoaded', ()=> {
    //setTimeout(() => alert('Здравствуйте! Наши двери всегда для вас открыты - выходите!'), 1000);
});

let heroBlock = document.querySelector('.hero-block__container');
let excursionsBlock = document.querySelector('.excursions__container');

// Скрываем-открываем блок в зависимости от пришедшего запроса
document.querySelector('.excursions').addEventListener('click', ()=>{
    heroBlock.classList.toggle("hidden");
    excursionsBlock.classList.toggle("hidden");
})