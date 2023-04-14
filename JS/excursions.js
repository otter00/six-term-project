const Json = `[{
    "url":"",
    "title":"Олимп",
    "about":"Потухший вулкан на Марсе, самая высокая гора в Солнечной системе. Высота Олимпа - 27 км к его основанию.",
    "class":"first"
},{
    "url":"",
    "title":"Пещера Светлячков",
    "about":"about",
    "class":"second"
},{
    "url":"",
    "title":"Рорайма",
    "about":"about",
    "class":"third"
},{
    "url":"",
    "title":"Галактика «Сомбреро»",
    "about":"about",
    "class":"fourth"
},{
    "url":"",
    "title":"Беспин",
    "about":"about",
    "class":"fifth"
},{
    "url":"",
    "title":"Брайт-Фоллс",
    "about":"about",
    "class":"sixth"
}]`;

document.addEventListener('DOMContentLoaded', function (e) {
    let excursions = JSON.parse(Json);
    //console.log(excursions);

    let excContent = "";

    for (let exc of excursions) {
        excContent += 
        `<div class="excursion__card ${exc.class}-card">
            <img src=${exc.url} alt="exc__pic">

            <details class="exc__info">
                <summary class="exc__title">${exc.title}</summary>
                <p class="exc__about">${exc.about}</p>
            </details>
        </div>`;
    }
    //console.log(excContent);

    document.querySelector('.excursions__wrapper').innerHTML = excContent;
});

        
            // <div class="exc__info">
            //     <span class="exc__title">${exc.title}</span>
            //     <p class="exc__about">${exc.about}</p>
            // </div>