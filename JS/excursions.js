const JsonLoc = `[{
    "title":"Полежать, играя в Обломовщину",
    "about":"Захааааааар!",
    "class":"first"
},{
    "title":"На Кавказ по тропам Лермонтова",
    "about":"Умер Лермонтов на Кавказе, но любил он его не поэтому",
    "class":"second"
},{
    "title":"По-Чеховски изысканно и задумчиво",
    "about":"Замечательный день сегодня. То ли чаю пойти выпить, то ли повеситься...",
    "class":"third"
},{
    "title":"Как истинно Ремарковская фрау",
    "about":"Встречаются как то Эрих, Мария и Ремарк на западном фронте, а там без перемен",
    "class":"fourth"
},{
    "title":"Ощути себя Маяковским",
    "about":"Любовь зла",
    "class":"fifth"
},{
    "title":"Выбор по-Чернышевски",
    "about":"Что делать?..",
    "class":"sixth"
}]`;

//add cards into html on dom content loaded
// document.addEventListener('DOMContentLoaded', function (e) {
//     let locations = JSON.parse(JsonLoc);
//     //console.log(excursions);

//     let locContent = "";

//     for (let location of locations) {
//         locContent += 
//         `<div class="locations__card ${location.class}-card">
//             <details class="loc__info">
//                 <summary class="loc__title">${location.title}</summary>
//                 <p class="loc__about">${location.about}</p>
//             </details>
//         </div>`;
//     }
//     //console.log(locContent);
//     document.querySelector('.locations__wrapper').innerHTML = locContent;
// });

let wrongBtns = Array.from(document.querySelectorAll('#wrong-btn'));
console.log(wrongBtns);

for (let i = 0; i < wrongBtns.length; i++) {
    wrongBtns[i].addEventListener('click', ()=>{
        alert('Мимо');
    });
}

let rightBtn = document.querySelector('#right-btn');

rightBtn.addEventListener('click', ()=>{
    window.location.href = '../pages/locations.html';
})