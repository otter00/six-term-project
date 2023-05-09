// tabs

let optionsBlock = document.querySelector('.account__tabs');
// let attractionsBlock = document.querySelector('.attractions__container');
// let galleryBlock = document.querySelector('.gallery__container');

const tabs = Array.from(document.querySelectorAll('.nav__option'));
const content = Array.from(document.querySelectorAll('.content'));

//show all the tabs with account content
content.forEach(element => {
    if(element.classList.contains('hidden'))
        console.log(element);
});

//show all the tabs with profile options
console.log(tabs)
tabs.forEach(element => {
        console.log(element);
});

// Надо оптимизировать
//Скрываем-открываем блок в зависимости от пришедшего запроса
let checkTabs = (item) => {
    item.addEventListener('click', ()=>{
        console.log(item);
        if (item.classList.contains('profile')) {
            document.querySelector('#account__content-0').classList.add("hidden");
            document.querySelector('#account__content-1').classList.remove("hidden");
            document.querySelector('#account__content-2').classList.add("hidden");
            document.querySelector('#account__content-3').classList.add("hidden");
        }
        if (item.classList.contains('privacy')) {
            document.querySelector('#account__content-0').classList.add("hidden");
            document.querySelector('#account__content-1').classList.add("hidden");
            document.querySelector('#account__content-2').classList.remove("hidden");
            document.querySelector('#account__content-3').classList.add("hidden");
        }
        if (item.classList.contains('feedback')) {
            document.querySelector('#account__content-0').classList.add("hidden");
            document.querySelector('#account__content-1').classList.add("hidden");
            document.querySelector('#account__content-2').classList.add("hidden");
            document.querySelector('#account__content-3').classList.remove("hidden");
        }
    })
}

tabs.forEach(checkTabs);


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