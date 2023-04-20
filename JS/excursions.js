const JsonLoc = `[{
    "title":"Полежать, играя в Обломовщину",
    "about":"about",
    "class":"first"
},{
    "title":"На Кавказ по тропам Лермонтова",
    "about":"about",
    "class":"second"
},{
    "title":"По-Чеховски изысканно и задумчиво",
    "about":"about",
    "class":"third"
},{
    "title":"Как истинно Ремарковская фрау",
    "about":"about",
    "class":"fourth"
},{
    "title":"Ощути себя Маяковским",
    "about":"about",
    "class":"fifth"
},{
    "title":"Выбор по-Чернышевски",
    "about":"about",
    "class":"sixth"
}]`;

//add cards into html on dom content loaded
document.addEventListener('DOMContentLoaded', function (e) {
    let locations = JSON.parse(JsonLoc);
    //console.log(excursions);

    let locContent = "";

    for (let location of locations) {
        locContent += 
        `<div class="locations__card ${location.class}-card">
            <details class="loc__info">
                <summary class="loc__title">${location.title}</summary>
                <p class="loc__about">${location.about}</p>
            </details>
        </div>`;
    }
    //console.log(locContent);
    document.querySelector('.locations__wrapper').innerHTML = locContent;
});