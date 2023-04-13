//      НЕ ЗАБЫТЬ РАСКОММЕНТИРОВАТЬ         

document.addEventListener('DOMContentLoaded', ()=> {
    //setTimeout(() => alert('Здравствуйте! Наши двери всегда для вас открыты - выходите!'), 1000);
});




// Ниже вообще хрень какая-то... (переделано на css со ссылками)

// let heroBlock = document.querySelector('.hero-block__container');
// let excursionsBlock = document.querySelector('.excursions__container');
// let attractionsBlock = document.querySelector('.attractions__container');
// let galleryBlock = document.querySelector('.gallery__container');

// const tabs = Array.from(document.querySelectorAll('.tab'));
// const content = Array.from(document.querySelectorAll('.content'));
// content.forEach(element => {
//     if(element.classList.contains('hidden'))
//         console.log(element);
// });

// console.log(tabs)
// tabs.forEach(element => {
//         console.log(element);
// });

// Надо оптимизировать
//Скрываем-открываем блок в зависимости от пришедшего запроса
// let checkTabs = (item) => {
//     item.addEventListener('click', ()=>{
//         console.log(item);
//         if (item.classList.contains('fa')) {
//             heroBlock.classList.remove("hidden");
//             excursionsBlock.classList.add("hidden");
//             attractionsBlock.classList.add("hidden");
//             galleryBlock.classList.add("hidden");
//         }
//         if (item.classList.contains('excursions')) {
//             heroBlock.classList.add("hidden");
//             excursionsBlock.classList.remove("hidden");
//             attractionsBlock.classList.add("hidden");
//             galleryBlock.classList.add("hidden");
//         }
//         if (item.classList.contains('attr')) {
//             heroBlock.classList.add("hidden");
//             excursionsBlock.classList.add("hidden");
//             attractionsBlock.classList.remove("hidden");
//             galleryBlock.classList.add("hidden");
//         }
//         if (item.classList.contains('gallery')) {
//             heroBlock.classList.add("hidden");
//             excursionsBlock.classList.add("hidden");
//             attractionsBlock.classList.add("hidden");
//             galleryBlock.classList.remove("hidden");
//         }
//     })
// }

// tabs.forEach(checkTabs);


// const clearActiveClass = (element, className = 'hidden') => {
//     element.find(item => item.classList.remove(`${className}`))
// };

// const setActiveClass = (element, index, className = 'hidden') => {
//     element[index].classList.add(`${className}`)
// };

// const checkTabs = (item, index) => {
//     item.addEventListener('click', ()=>{
//         console.log(item);

//         clearActiveClass(content);

//         //setActiveClass(tabs, index);
//         setActiveClass(content, index);
//     })
// }

// tabs.forEach(checkTabs);
// content.forEach(checkTabs);